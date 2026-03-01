// src/pages/api/latest-letterboxd.ts
import type { APIRoute } from "astro";

interface LatestLetterboxdResponse {
  title: string;
  poster: string | null;
  link?: string;
  watched_date?: string;
  tmdbId?: string;
}

function extractPoster(item: any): string | null {
  // rss2json sometimes gives enclosure or content with <img>
  if (item.enclosure?.link) return item.enclosure.link;
  if (item.content) {
    const match = item.content.match(/<img src=['"]([^'"]+)['"]/);
    if (match) return match[1];
  }
  return null;
}

export const GET: APIRoute = async () => {
  try {
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

    console.log("rss2json response:", JSON.stringify(data, null, 2));

    if (!data.items || data.items.length === 0) {
      return new Response(
        JSON.stringify({ error: "No items found in feed", debug: data }),
        {
          status: 404,
        },
      );
    }

    const latest = data.items[0];

    const response: LatestLetterboxdResponse = {
      title: latest.title || "",
      poster: extractPoster(latest),
      link: latest.link,
      watched_date: latest.watchedDate,
      tmdbId: latest.tmdbId,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=600, stale-while-revalidate",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
