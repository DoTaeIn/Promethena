<p align="center">
  <img src="promethena-logo.png" width="72" alt="Promethena mark" />
</p>

<h1 align="center">Promethena</h1>

<p align="center"><strong>Carved in logic. Shipped to the web.</strong></p>

<p align="center">
  The official site for Promethena — independent software products, organization adoption, and custom implementation.
</p>

---

Promethena is a static product site built around one rule:

> **Add one Markdown file. Publish one product.**

Products can be prototypes before they are finished. The site shows their real state — `idea`, `prototype`, `beta`, or `live` — instead of presenting unfinished work as a completed product.

## What lives here

```text
Products/     Product source documents — one Markdown file per language
site/         Astro static site
Jenkinsfile   Build and Docker deployment pipeline
Dockerfile    Nginx image for the built site
```

The website provides:

- Product dock and product detail pages
- Korean and English routes
- Light and dark themes
- Personal-use, organization-adoption, and custom-development inquiries
- Terms of service and privacy policy

## Add a product

Copy [`Products/_TEMPLATE.md`](Products/_TEMPLATE.md), then name the file using this convention:

```text
Products/{slug}.{lang}.md
```

For example:

```text
Products/Atlas.ko.md
Products/Atlas.en.md
```

The slug becomes the URL:

```text
/p/Atlas/
/en/p/Atlas/
```

Only the language files that exist are published. An unfinished English translation never breaks the Korean site.

### Required frontmatter

```yaml
---
name: Atlas
tagline: A one-line product description
status: prototype # idea | prototype | beta | live
tags: [web, collaboration]
---
```

Optional fields:

```yaml
price: 0             # Meaningful only for live products
demo: https://...    # Hidden when absent
```

The Markdown body is intentionally free-form. The build validates the required frontmatter so a malformed product cannot silently reach the site.

| Status | Meaning | Product action |
| --- | --- | --- |
| `idea` | Not started | No inquiry action |
| `prototype` | In progress | Personal-use waitlist, adoption, and extension inquiry |
| `beta` | Available for evaluation | Personal use, adoption, and extension inquiry |
| `live` | Released | Personal use, adoption, and extension inquiry |

## Develop locally

Requires Node.js 22.12 or newer.

```bash
cd site
npm ci
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Create a production build with:

```bash
cd site
npm run build
```

The generated static files are placed in `site/dist/`.

## Deployment

The repository contains a Jenkins pipeline for a Linux agent with Docker access.

```text
push to main
  → Jenkins detects the commit (up to 5 minutes)
  → Node 22.12.0 is prepared in the workspace
  → Astro builds site/dist
  → Docker creates an Nginx image
  → promethena-site is replaced on host port 31003
```

The default deploy target is `http://<server>:31003`. Point a reverse proxy at that port for the public domain. The Jenkins agent must be allowed to run Docker commands.

## Contact

- Website: Promethena
- GitHub: [DoTaeIn](https://github.com/DoTaeIn)
- Email: [dotaein@promethena.co.kr](mailto:dotaein@promethena.co.kr)
