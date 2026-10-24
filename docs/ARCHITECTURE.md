# Architecture

The platform uses one strict TypeScript Next.js App Router application with three route surfaces: public pages, `/app` for approved members, and `/admin` for authorized operations. Firebase Authentication supplies identity; custom claims supply privileged roles and membership status. Firestore stores bounded operational records, Storage accepts image formats only, Gen 2 Functions perform privileged mutations, and App Check is expected in production.

The browser never assigns roles, verifies payments, or mutates audit records. Sensitive actions pass through callable or HTTP functions that repeat authorization and validation. Public copy is versioned in source rather than a CMS.

The PWA caches only approved public pages and the offline fallback. It excludes `/app`, `/admin`, and `/api` requests to prevent sensitive data entering public caches.

Payment integration is adapter-oriented, defaults to disabled, and begins with Paystack. The webhook validates signatures and processes references idempotently. Bible content defaults to the legally reusable World English Bible; other translations require an approved provider and license.
