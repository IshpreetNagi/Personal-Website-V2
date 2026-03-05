// src/pages/api/latest-letterboxd.ts
import type { APIRoute } from "astro";

interface MovieInfoResponse {
  title: string;
  poster: string | null;
  watched_date?: string;
  release_year?: string | null;
  description?: string | null;
  genres?: string[];
  runtime?: number | null;
  tmdb_score?: number | null;
}

function extractPoster(item: any): string | null {
  if (item.enclosure?.link) return item.enclosure.link;
  if (item.content) {
    const match = item.content.match(/<img src=['"]([^'"]+)['"]/);
    if (match) return match[1];
  }
  return null;
}

function extractName(item: any): string | null {
  const title = item.title;
  if (!title) return null;
  return title.replace(/,\s*\d{4}.*$/, "").trim();
}

function extractYear(item: any): string | null {
  const title = item.title;
  if (!title) return null;

  // Extract year from format: "Movie Name, 2024 - ★★★"
  const yearMatch = title.match(/,\s*(\d{4})/);
  return yearMatch ? yearMatch[1] : null;
}

async function searchTmdbByNameAndYear(movieName: string, year: string | null) {
  const token = import.meta.env.TMDB_API_KEY;
  if (!token) return null;

  const params = new URLSearchParams();
  params.set("query", movieName);
  params.set("include_adult", "false");

  // TMDB prefers primary_release_year
  if (year) {
    params.set("primary_release_year", year);
  }

  const searchRes = await fetch(
    `https://api.themoviedb.org/3/search/movie?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!searchRes.ok) {
    console.error("TMDB search failed:", searchRes.status);
    return null;
  }

  const searchData = await searchRes.json();

  if (!searchData.results?.length) {
    console.warn("No TMDB results for:", movieName, year);
    return null;
  }

  let match = null;

  if (year) {
    // Prefer exact year match
    match = searchData.results.find((r: any) =>
      r.release_date?.startsWith(year),
    );
  }

  // Fallback to first result if no exact year match
  if (!match) {
    match = searchData.results[0];
  }

  if (!match?.id) return null;

  const detailsRes = await fetch(
    `https://api.themoviedb.org/3/movie/${match.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!detailsRes.ok) {
    console.error("TMDB details fetch failed:", detailsRes.status);
    return null;
  }

  const data = await detailsRes.json();

  return {
    release_year: data.release_date?.split("-")[0] ?? null,
    description: data.overview ?? null,
    genres: data.genres?.map((g: any) => g.name) ?? [],
    runtime: data.runtime ?? null,
    tmdb_score: data.vote_average
      ? Math.round(data.vote_average * 10) / 10
      : null,
  };
}

// Cache storage
let cache: {
  data: MovieInfoResponse | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

export const GET: APIRoute = async () => {
  try {
    // Check if cache is valid
    const now = Date.now();
    if (cache.data && now - cache.timestamp < CACHE_DURATION_MS) {
      return new Response(JSON.stringify(cache.data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=28800, stale-while-revalidate=60",
          "X-Cache": "HIT",
        },
      });
    }

    const rssUrl = import.meta.env.RSS_FEED_URL;
    const encodedUrl = encodeURIComponent(rssUrl);
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodedUrl}`;

    const res = await fetch(rss2jsonUrl);
    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch RSS: ${res.status}` }),
        {
          status: res.status,
        },
      );
    }

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      return new Response(
        JSON.stringify({ error: "No items found in feed", debug: data }),
        {
          status: 404,
        },
      );
    }

    const latest = data.items[0];

    const movieName = extractName(latest);
    const year = extractYear(latest);

    let tmdbInfo = null;
    if (movieName) {
      tmdbInfo = await searchTmdbByNameAndYear(movieName, year);
    }

    const response: MovieInfoResponse = {
      title: movieName || "",
      poster: extractPoster(latest),
      watched_date: latest.pubDate,
      ...tmdbInfo,
    };

    // Update cache
    cache.data = response;
    cache.timestamp = Date.now();

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=28800, stale-while-revalidate=60",
        "X-Cache": "MISS",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
