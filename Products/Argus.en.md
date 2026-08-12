---
name: Argus
tagline: Product intelligence that respects your customers.
status: beta
tags: [product-analytics, event-tracking, privacy, saas]
price: 0
demo: http://localhost:8787/app
---

# Argus

Argus is a first-party product analytics platform for teams that need clear, trustworthy answers about how people use their product.

It turns browser activity into a structured event stream, joins anonymous activity to a signed-in user when they identify themselves, and presents the result in a focused dashboard and event explorer.

## What it does

- Automatically tracks page views, clicks, form submissions, sessions, and UTM context through a lightweight browser SDK.
- Queues events locally when a visitor is offline and sends them when the connection returns.
- Deduplicates retried events using a project-scoped event ID.
- Resolves anonymous visitors to an identified user after login, including prior events from that visitor.
- Shows seven-day event, visitor, session, purchase, and visitor-trend metrics.
- Provides a searchable event explorer for event names, anonymous IDs, user IDs, sessions, timestamps, and event properties.

## Built for responsible analytics

Argus separates browser-facing ingestion keys from private administration keys, restricts ingestion to approved origins, and stores API-key and session-token hashes rather than raw values. It also avoids collecting full URLs with query strings, reducing accidental capture of tokens or personal data.

The current beta includes authenticated workspaces, server-side project scoping, CSP and browser security headers, login throttling, CSRF-oriented origin checks, and PostgreSQL-backed persistence.

## Run locally

```sh
docker compose up --build -d
docker compose exec api node src/migrate.mjs
docker compose exec api node src/seed.mjs
```

Create your environment file from `.env.example`, replace every example secret, then open the demo at `http://localhost:8787/app`.

## Status

Argus is in beta. The tracking engine, authentication, dashboard, and event explorer are working. Planned production hardening includes multi-factor authentication, email verification and recovery, distributed rate limiting, audit logs, consent controls, and advanced analytics such as funnels and retention.
