interface ImportMetaEnv {
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_CLIENT_SECRET?: string;
  readonly SPOTIFY_REFRESH_TOKEN: string;
  readonly TMDB_API_KEY: string;
  readonly RSS_FEED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
