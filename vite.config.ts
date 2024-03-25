import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgrPlugin({
    // svgr options here
  })],
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })