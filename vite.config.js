import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // Bundle analyzer - hanya aktif saat build dengan flag ANALYZE=true
    mode === 'analyze' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
  ].filter(Boolean),

  build: {
    // Target browser modern yang mendukung WebP & ESM
    target: 'es2020',

    // Batas warning chunk size dinaikkan sedikit (default 500kb terlalu ketat untuk framer-motion)
    chunkSizeWarningLimit: 800,

    // Aktifkan minifikasi Terser untuk output JS yang lebih kecil
    minify: 'terser',
    terserOptions: {
      compress: {
        // Hapus console.log di production
        drop_console: true,
        drop_debugger: true,
        // Optimasi ekstra
        passes: 2,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        // Hapus komentar di output final
        comments: false,
      },
    },

    // CSS Code Splitting
    cssCodeSplit: true,

    // Source maps hanya untuk development
    sourcemap: mode === 'development',

    rollupOptions: {
      output: {
        // Nama file dengan hash untuk cache busting yang optimal
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Pisahkan gambar ke folder images/
          if (/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(assetInfo.name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          // Pisahkan font ke folder fonts/
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },

        // Manual chunk splitting yang lebih granular
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Framer Motion — pisahkan sendiri karena sangat besar (~80KB gzip)
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion'
            }
            // Lucide React — pisahkan sendiri karena tree-shaking-nya bisa besar
            if (id.includes('lucide-react')) {
              return 'vendor-lucide'
            }
            // React & React DOM — core vendor, cache paling lama
            if (id.includes('react-dom')) {
              return 'vendor-react-dom'
            }
            if (id.includes('react/') || id.includes('/react@') || id.includes('react-jsx')) {
              return 'vendor-react'
            }
            // Semua vendor lain
            return 'vendor-misc'
          }
        },
      },
    },
  },

  // Optimasi resolusi module
  resolve: {
    alias: {
      // Pastikan hanya satu versi React yang di-resolve
      'react': 'react',
      'react-dom': 'react-dom',
    },
  },

  // Optimasi dev server
  server: {
    hmr: true,
    // Preload asset utama agar dev lebih cepat
    warmup: {
      clientFiles: [
        './src/App.jsx',
        './src/sections/HeroSection.jsx',
      ],
    },
  },

  // Pre-bundle dependencies untuk dev server yang lebih cepat
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
    ],
    // Paksa re-bundle saat ada perubahan dependency
    force: false,
  },
}))
