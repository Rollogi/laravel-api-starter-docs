---
seo:
  title: Rollogi Laravel API Starter
  description: A Laravel 13 API-only, modular, single-database multi-tenant SaaS starter kit, with rollogi/core, rollogi/billing and rollogi/nuxt-ui.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
A Laravel API that is [multi-tenant from the first request]{.text-primary}.

#description
An API-only, modular starter kit for Laravel 13 and PHP 8.5. Tenancy, roles, OAuth, two-factor, passkeys, webhooks, audit trails and feature toggles are already wired, and every use case runs through the same audited, authorised pipeline.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-lucide-boxes
  color: neutral
  variant: outline
  size: xl
  to: /core
  ---
  rollogi/core
  :::

#default
  :::prose-pre
  ---
  code: |
    laravel new my-api --using=rollogi/laravel-api-starter
    cd my-api && composer setup
    composer check
  filename: Terminal
  ---

  ```bash [Terminal]
  laravel new my-api --using=rollogi/laravel-api-starter
  cd my-api && composer setup
  composer check
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
One kit, three packages

#description
The kit is a project skeleton. The shared infrastructure it is built on, and the optional features you can add to it, are versioned packages of their own.

#features
  :::u-page-feature
  ---
  icon: i-simple-icons-laravel
  to: /kit/architecture
  ---
  #title
  The starter kit

  #description
  Self-contained modules for accounts, authentication, notifications, tenants and outbound webhooks, auto-discovered with no registry to edit.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-boxes
  to: /core
  ---
  #title
  rollogi/core

  #description
  The service pipeline, actions, tenancy, feature toggles, integrations, health and RFC 9457 problems that every module builds on.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-credit-card
  to: /billing
  ---
  #title
  rollogi/billing

  #description
  Optional Stripe billing on Laravel Cashier, for tenants or people: plans, seats, metered usage and plan limits.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-nuxt
  to: /nuxt-ui
  ---
  #title
  rollogi/nuxt-ui

  #description
  Optional server-driven screens built in PHP and served as JSON trees for a Nuxt UI renderer, with permissions folded on the server.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-building-2
  to: /kit/multi-tenancy
  ---
  #title
  Single-database tenancy

  #description
  Tenant-owned rows are scoped by a global scope, the active tenant comes from the X-Tenant header, and roles are per tenant.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  to: /kit/testing
  ---
  #title
  Tested on three databases

  #description
  Pint, Larastan level 8, Rector and Pest gate every change, and the suite runs on SQLite, MySQL and PostgreSQL.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Add your first use case
      to: '/kit/use-cases'
      trailingIcon: i-lucide-arrow-right
    - label: How it is released
      to: '/releases'
      variant: subtle
      icon: i-lucide-tag
  title: Data, Controller, Service, Action, Policy
  description: One generator writes the whole slice, and the pipeline gives every write its authorisation, audit row, transaction and metric for free.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
