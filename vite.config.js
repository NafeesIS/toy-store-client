// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit as needed
    rollupOptions: {
      output: {
        manualChunks: undefined, // Define manual chunks here if necessary
      },
    },
  },
})
