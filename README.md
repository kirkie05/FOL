# RCCG Fountain of Life Sanctuary Digital Platform

Greenfield Next.js implementation of the public FOLS website, FOLS Connect member application, church operations portal, and Firebase backend. The requested ClickChurch Core source was not present, so its required capabilities are represented by modular domain, Firebase, rules, Functions, and route foundations in this repository.

## Local setup

1. Copy `.env.example` to `.env.local` and add a Firebase web project. Never commit credentials.
2. Run `npm install` and `npm run dev`.
3. For local backend work, install the Firebase CLI and run `npm run emulators`.
4. Run `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` before review.

Authentication and operational writes deliberately remain unavailable when Firebase is not configured. Live payments are disabled unless `PAYMENT_PROVIDER=paystack` and approved secrets are present. Deployment is not part of the initial implementation.

## Content boundaries

Public copy, schedules, leadership, and verified ministries live in typed source configuration. Firestore is reserved for operational data. There is no CMS, page builder, public news page, public gallery, live-service page, or member video upload path.

Authentic FOLS photography, approved doctrinal and leadership copy, Telegram URLs, bank details, production administrator identity, and a defined 21-day reading plan remain required inputs.

See `docs/ARCHITECTURE.md`, `docs/DATA-MODEL.md`, `docs/ROLES.md`, and `docs/PRODUCTION-READINESS.md`.

## Adding photographs and videos

Place approved media in `public/media` using the folder and filename guidance in `public/media/README.md`. The site currently displays clearly labeled CSS placeholders, so missing media never produces broken image or video elements.
