---
name: Hestia
tagline: A durable home for your team’s documents
status: prototype
tags: [knowledge-base, collaboration, documentation, saas]
---

# Hestia

Hestia is a collaborative documentation platform where teams write, share, and search for knowledge through spaces and page trees. Its core idea is **documents that do not disappear**: preserving context and change history while making information safe to share and easy to find again.

## Current implementation

- Supabase magic-link authentication and Google OAuth
- Workspace creation with automatic owner membership
- Workspace and document data models protected by Row Level Security
- TipTap rich-text editor with titles, formatting, tables, code blocks, and images
- Image selection and drag-and-drop insertion with a 20MB file limit
- ProseMirror JSON document storage with debounced autosave
- Workspace-specific document lists, hierarchical trees, and live document search
- Light and dark themes, responsive editing UI, and sentence-level comment UI

## Technology

- Next.js 15, React 19, TypeScript
- TipTap / ProseMirror
- Supabase Auth, PostgreSQL, and Row Level Security
- Prepared for Vercel deployment

## Next steps

- Move and reorder pages with drag and drop
- Trash and restore flows
- Page version snapshots, diffs, and restoration
- Real sharing permissions and team invitations
- S3-compatible file storage and attachment access controls

## Run and deploy

Run these migrations in order in the Supabase SQL Editor, then copy `.env.example` to `.env.local` and add the required environment variables.

1. `supabase/migrations/0001_auth_workspaces.sql`
2. `supabase/migrations/0002_pages.sql`

```bash
npm install
npm run dev
```

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions.

## License

Copyright © 2026 Promethena. All rights reserved. Source-code and self-hosting terms are defined in [LICENSE.md](LICENSE.md).
