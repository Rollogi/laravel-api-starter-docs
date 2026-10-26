// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://laravel.rollogi.co.uk'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/sitemap'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    name: 'Rollogi Laravel API Starter'
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2026-06-30',

  // Fully static output, deployed to Cloudflare Workers as static assets (see wrangler.jsonc).
  // The preset is pinned so Cloudflare's build environment cannot auto-select the
  // cloudflare-module (server) preset, which would need a Worker entry point we do not build.
  // autoSubfolderIndex=false matches Cloudflare's asset routing (/about.html served for /about).
  nitro: {
    preset: 'static',
    prerender: {
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Bundle every icon at build time and never call the Iconify API at runtime. The default
  // scan only covers app/, so content/ frontmatter icons were fetched remotely and blocked by
  // the Content-Security-Policy in production.
  icon: {
    provider: 'none',
    clientBundle: {
      // Code-block filename icons are chosen by Nuxt UI at render time, so no scan finds them.
      // A new filename type in content (a .yaml block, say) needs its icon added here.
      icons: [
        'lucide:terminal',
        'vscode-icons:file-type-dotenv',
        'vscode-icons:file-type-json',
        'vscode-icons:file-type-php'
      ],
      scan: {
        globInclude: ['**/*.{vue,jsx,tsx,md,mdc,mdx,yml,yaml,ts}', '../content/**/*.{md,yml,yaml}'],
        globExclude: ['node_modules', 'dist', '.nuxt', '.output']
      },
      sizeLimitKb: 512
    }
  },

  llms: {
    domain: siteUrl,
    title: 'Rollogi Laravel API Starter',
    description: 'A Laravel 13 API-only, modular, single-database multi-tenant SaaS starter kit, and the rollogi/core, rollogi/billing and rollogi/nuxt-ui packages it is built from.',
    full: {
      title: 'Rollogi Laravel API Starter - Full Documentation',
      description: 'Complete documentation for the Laravel API starter kit, rollogi/core, rollogi/billing and rollogi/nuxt-ui.'
    },
    sections: [
      { title: 'Getting Started', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/getting-started%' }] },
      { title: 'Starter Kit', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/kit%' }] },
      { title: 'rollogi/core', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/core%' }] },
      { title: 'rollogi/billing', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/billing%' }] },
      { title: 'rollogi/nuxt-ui', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/nuxt-ui%' }] },
      { title: 'Releases', contentCollection: 'docs', contentFilters: [{ field: 'path', operator: 'LIKE', value: '/releases%' }] }
    ]
  },

  ogImage: {
    zeroRuntime: true
  },

  prerender: {
    routes: [
      '/'
    ],
    crawlLinks: true
  },

  // Sitemap is generated at build time from the prerendered routes; robots.txt lives in public/
  sitemap: {
    autoLastmod: false,
    exclude: ['/raw/**', '/_og/**']
  }
})
