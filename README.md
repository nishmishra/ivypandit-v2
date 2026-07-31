# IvyPandit

**Tradition • Curiosity • Science**

IvyPandit is an independent scholarly and educational platform for Sanskrit, Indian Knowledge Systems, scientific curiosity, interdisciplinary research, and public learning.

## Current architecture

- `/iks` — IKS Hub
- `/repository` — portable knowledge-repository framework
- `/shastra-study` — Sanskrit and śāstra study
- `/research` — science and research
- `/sbkb` — Sanskrit Biomedical Knowledge Base
- `/perspectives` — Perspectives and Working Papers
- `/videos` — curated talks, lectures, recitations, and YouTube links
- `/publications` — formal publications
- `/hi` — substantive Hindi gateway
- `/sa` — substantive Sanskrit gateway
- `/data` — portable structured scholarly data
- `/content` — portable editorial/source content

## Core principle

**Respect tradition. Encourage curiosity. Demand rigor.**

Traditional source, interpretation, research question, scientific evidence, and public commentary should be distinguished.

## Portability

The canonical asset is the Git repository plus open-format content and public documents. Hosting should remain replaceable. See `PORTABILITY.md` and `CONTENT_SCHEMA.md`.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```
