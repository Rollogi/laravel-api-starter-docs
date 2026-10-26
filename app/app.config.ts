export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Rollogi Laravel API Starter'
  },
  header: {
    title: 'Rollogi Laravel API Starter',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Rollogi/laravel-api-starter-docs',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `MIT licensed • © ${new Date().getFullYear()} Rollogi`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Rollogi/laravel-api-starter-docs',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Links',
      edit: 'https://github.com/Rollogi/laravel-api-starter-docs/edit/main/content',
      links: [{
        icon: 'i-lucide-bug',
        label: 'Report an issue',
        to: 'https://github.com/Rollogi/laravel-api-starter-docs/issues/new',
        target: '_blank'
      }]
    }
  }
})
