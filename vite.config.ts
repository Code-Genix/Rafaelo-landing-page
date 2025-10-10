import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Simple, reliable SVGR configuration for Figma SVGs
      include: '**/*.svg?react',
      svgrOptions: {
        icon: true, // Optimize for icons
        replaceAttrValues: {
          '#000000': 'currentColor',
          '#000': 'currentColor',
          'black': 'currentColor',
        },
        svgProps: {
          fill: 'currentColor',
        },
        // Basic SVGO optimization
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false, // Keep viewBox for responsive scaling
                  removeDesc: true, // Remove Figma descriptions
                  removeMetadata: true, // Remove Figma metadata
                  cleanupIds: true, // Remove Figma IDs
                },
              },
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true
  }
})