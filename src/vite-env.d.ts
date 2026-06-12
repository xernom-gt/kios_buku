/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WA_NUMBER?: string;
  readonly VITE_WA_DISPLAY_NUMBER?: string;
  readonly VITE_INSTAGRAM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
