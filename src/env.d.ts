interface ImportMetaEnv {
  readonly LASTFM_API_KEY: string;
  readonly LASTFM_SHARED_SECRET?: string;
  readonly LASTFM_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}