# IvyPandit Content Schema

IvyPandit separates **source**, **interpretation**, **research question**, **evidence**, and **public commentary** wherever possible.

## Portable data areas

- `data/literature/` — indexed modern literature
- `data/research-questions/` — structured research questions
- `data/iks-resources/` — institutions, journals, archives, courses, opportunities, tools
- `data/sbkb/` — Sanskrit Biomedical Knowledge Base records
- `content/working-papers/` — editorial metadata/source records
- `public/library/working-papers/` — approved public PDFs

## Core identifiers

Every durable record should have a stable human-readable ID. Avoid provider-specific database IDs as the canonical identifier.

## Multilingual content

English, Hindi, and Sanskrit are content variants, not separate knowledge bases. Shared records should be linked by the same stable ID, with language-specific title, summary, translation, and notes where available.

## Evidence discipline

A traditional textual statement is not itself modern scientific evidence. Proposed mappings should be labelled as interpretation or hypothesis until empirically supported.
