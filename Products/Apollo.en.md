---
name: Apollo
tagline: A collaborative fiction platform where shared worlds grow into canon
status: beta
tags: [world-building, collaborative-writing, web-novel, shared-ip]
price: 0
---

# Apollo

Apollo is a shared-universe fiction platform. A creator builds a world, other writers create spin-offs within its rules, and readers help decide which stories become canon.

## Available now

- World wiki: characters, terms, places, events, immutable rules, timelines, and maps
- Collaborative writing: split-view editor, autosave, draft/publish workflow, and rule-conflict warnings
- Reading: wiki tooltips, canon voting, multiverse labels, and tag/keyword discovery
- Contribution and rewards: setting proposal board, adoption points, and a ledger-based settlement dashboard
- Collaboration controls: public/private worlds, viewer/editor invitations, wiki revision history, and restore
- Operations: magic-link login, notifications, Alembic migrations, and a health check

## Technology

Python, FastAPI, SQLModel, SQLite/Postgres, Alembic, and vanilla JavaScript.

The current product has five screens: wiki, writing editor, reader, dashboard, and contribution board. Colors, spacing, and typography are isolated as CSS variables in `static/theme.css`, so the visual design can be replaced later.

## Not included yet

- Payment gateway integration and real payouts
- Markdown rendering
- Final UI design and production deployment

## Documentation

- Setup and environment configuration: [README.md](README.md)
- Core engine architecture: [CORE.md](CORE.md)
- Product plan and deferred items: [PLAN.md](PLAN.md)
