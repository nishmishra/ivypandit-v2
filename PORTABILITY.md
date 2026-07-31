# IvyPandit portability guide

## Design principle
IvyPandit must be portable. Hosting is replaceable; the domain, source code, content, and scholarly data should remain under independent control.

## Canonical assets
- Source code: Git repository
- Structured scholarly data: `/data`
- Editorial/source content: `/content`
- Public documents and media: `/public`
- Domain: managed independently from the hosting provider

## Standard deployment
Requirements:
- Node.js 20+
- npm

Commands:
```bash
npm install
npm run build
npm run start
```

The application intentionally avoids Vercel-only databases, KV stores, Blob storage, Edge Config, or provider-specific APIs.

## Moving hosts
1. Clone the Git repository on the new host.
2. Install Node.js 20+ and npm.
3. Run `npm install` and `npm run build`.
4. Run `npm run start` behind the host's HTTPS/reverse-proxy setup.
5. Test the temporary host address.
6. Change the DNS records for `ivypandit.com` only after testing.
7. Keep the previous deployment available until DNS propagation and validation are complete.

## Backup policy
Maintain independent copies of:
- the Git repository
- `/data`
- `/content`
- original PDFs, Word files, images, datasets, and media
- a current domain/DNS configuration record

No single hosting company should be the only custodian of IvyPandit's scholarly assets.
