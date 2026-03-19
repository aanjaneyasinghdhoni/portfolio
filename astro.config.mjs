import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      // Allow any host so dev server works through tunnels (ngrok, Cloudflare Tunnel, etc.)
      // Dev-only — has no effect on production builds
      allowedHosts: true,
    },
  },
});
