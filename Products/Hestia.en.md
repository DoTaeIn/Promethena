---
name: Hestia
tagline: A team document space that never erases
status: prototype
tags: [knowledge-base, collaboration, documentation, saas]
---

# Hestia

A document space your team writes in together. Stack pages in a tree under a space, edit them with other people, and find them again later.

One thing sets it apart. **Hestia does not erase.** How a document became what it is stays on the record, and even undoing a change never overwrites what came before.

## If any of this sounds familiar

- You never found that document you clearly organized last month
- Nobody could explain when a sentence changed, or why
- An important discussion scattered across chat instead of landing in a document
- Someone left the team and their documents kept their old permissions

## What you can do

### Write together
Several people edit the same document at once. Edits are shared in real time, and nobody's work gets overwritten because someone else saved first.

### Keep versions
When the document owner saves a version, that whole moment is preserved. Between any two versions you can **compare what was removed and what was added, marked by color**.

### Roll back without losing anything
Restoring an older version does not delete the current one. The restored result is stacked on as a new version. No version ever disappears from the list.

### Ask questions on a sentence
Comment on **a specific sentence**, not a whole paragraph, right where it sits. Replies thread underneath, and deleting a comment only hides its content — the fact that someone deleted it, and when, remains.

### Organize
Drag pages to reorder them or move them under a parent document. Deleted documents come back from the trash together with their child pages.

### Share
Invite teammates by email and assign owner, admin, editor, or viewer. Permissions are enforced in the database, not merely hidden in the interface. Document ownership can be transferred.

### Search
Search the text of your documents, not just their titles. `Ctrl / ⌘ K` from anywhere.

### Write comfortably
Type headings, lists, quotes, tables, and code blocks the way you write Markdown. Drop an image into the text and it lands where you dropped it. Light and dark themes are both supported, and editing works on narrow screens.

## Where it stands

**This is a prototype.** Signing up, creating a workspace, writing documents, and inviting teammates to edit alongside you all work for real.

There is no public demo address yet. Running it means installing it yourself.

## In progress

- General file attachments, not just images
- Pricing plans and the sign-up flow

## How it's built

Next.js · React · TypeScript · TipTap · Supabase (PostgreSQL).

Installation and deployment instructions are in the [README](README.md) and the [deployment guide](docs/DEPLOYMENT.md).

## License

Copyright © 2026 Promethena. All rights reserved. Source code and self-hosting terms follow [LICENSE.md](LICENSE.md).
