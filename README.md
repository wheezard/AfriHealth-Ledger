# AfriHealth Ledger

AfriHealth Ledger is a mobile-first web application that secures, audits, and manages patient medical records and consents using Hedera blockchain primitives. The system keeps sensitive medical data encrypted off-chain while recording tamper-evident consent and access events on Hedera, enabling verifiable audit trails, patient-controlled consent, and secure provider access — built for low-bandwidth African healthcare settings.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Problem & Impact](#problem--impact)
3. [Solution Summary](#solution-summary)
4. [Features (Granular)](#features-granular)
5. [Architecture & Data Flow](#architecture--data-flow)
6. [Security, Privacy & Compliance](#security-privacy--compliance)
7. [Offline / Low-Connectivity Strategy](#offline--low-connectivity-strategy)
8. [Identity & Access Model](#identity--access-model)
9. [Tech Stack](#tech-stack)
10. [Getting Started (Detailed)](#getting-started-detailed)
11. [Run / Demo Checklist](#run--demo-checklist)
12. [Project Structure (Expanded)](#project-structure-expanded)
13. [Testing & QA](#testing--qa)
14. [Deployment & Monitoring](#deployment--monitoring)
15. [Roadmap & Future Work](#roadmap--future-work)
16. [Contributing](#contributing)
17. [License & Acknowledgments](#license--acknowledgments)

## Project Overview

AfriHealth Ledger provides:

- **Patient-centric encrypted medical record storage** (off-chain)
- **Immutable consent and access logs** on Hedera (on-chain hashes/transactions)
- **Wallet-based key custody** via HashPack for patients and providers
- **Lightweight client** suitable for mobile and intermittent connectivity
- **Analytics/dashboard** for clinics to measure adoption and audit trails

## Problem & Impact

**Problem:** Fragmented medical records, lack of verifiable consent, and low trust in record provenance across many African healthcare settings.

**Impact:** Increase patient control over health data, provide auditable access logs for providers and regulators, reduce friction in record transfer, and enable measurable improvements in record retrieval time and auditability.

###  Target Outcomes

- Reduce record retrieval time by **40%** in participating clinics
- Provide verifiable consent audit for **1000 patient events** in pilot
- Enable offline-first record capture for remote clinics

## Solution Summary

Store encrypted medical records off-chain (IPFS/S3/Arweave) and record content hashes + consent transactions on Hedera. Use HashPack wallet connect for signing and key management; providers and patients authorize access via signed consent transactions recorded on Hedera testnet/mainnet. Provide a simple, responsive UI with realtime consent status and an audit trail linking to Hedera explorer transactions.

## Features (Granular)

### Record Lifecycle

- **Create patient record** (metadata stored locally + encrypted blob uploaded off-chain)
- **Record reference/hash** stored on Hedera as a transaction (no PII on-chain)
- **Update record with versioning**: each update uploads new encrypted blob and appends new hash to on-chain audit
- **Soft-delete and archive flows** with on-chain revocation markers (not deleting historic hashes)

### Consent Management

- **Grant consent**: patient signs a consent transaction using HashPack — hashed consent + tx ID saved
- **Revoke consent**: patient triggers a revoke transaction; access keys are rotated and revoke marker recorded on-chain
- **Time-limited consents and scoped consents** (e.g., lab results only) implemented as structured consent objects

### Access & Auditing

- **Provider requests access** through UI; patient approves via HashPack or predefined consent rules
- **All access attempts** and grants/revocations are timestamped and linked to Hedera tx IDs for verification
- **Audit viewer**: show transaction history and direct links to Hedera explorer

### Privacy-Preserving Storage

- Records encrypted with a **symmetric key (AES-256-GCM)**
- Symmetric key encrypted with **recipient public key(s)** when consent is granted
- **On-chain**: only store content hashes, consent metadata (non-PII), and access audit events

### UX & Accessibility

- **Mobile-first, responsive design** using Shadcn UI + Tailwind
- **Dark/Light mode**
- **Offline caching and queued sync** for intermittent networks
- **Minimal onboarding screens** for clinics and patients

### Analytics

- **Recharts-based dashboard** showing consent events, most-requested records, and clinic adoption metrics

## Architecture & Data Flow

### High-Level Components

- **Frontend** (React + TypeScript): UI, wallet connect, encryption client, sync queue
- **Off-chain storage**: IPFS (preferred), S3, or Arweave — encrypted blobs only
- **Hedera network**: testnet/mainnet transactions for hashes, consent events, and audit logs
- **Backend** (optional): lightweight API for indexing, search, and push notifications (can be serverless)
- **Identity provider**: HashPack wallet + optional DID and KYC verification service

### Data Flow (Common Operation: Grant Access)

1. Provider requests access to a patient's record via frontend
2. Patient receives request (UI/push) and approves, signing a consent object with HashPack
3. Frontend uploads encrypted record (if new) to IPFS and gets content hash
4. Frontend submits Hedera transaction containing consent metadata and content hash (no PII)
5. Providers fetch the encrypted symmetric key (encrypted for provider) and decrypt the record locally

## Security, Privacy & Compliance

### Data Minimization
PII never stored on-chain. On-chain stores content hashes and consent metadata only.

### Encryption
- **Symmetric**: AES-256-GCM for record blobs
- **Key wrapping**: symmetric keys encrypted with recipient public keys (Elliptic-curve as provided by HashPack/Hedera wallet)

### Key Custody
Private keys remain with user wallets (HashPack); the app never stores private keys.

### Threat Model
- **Threat**: leaked backend storage credentials → **mitigated** by client-side encryption before upload
- **Threat**: unauthorized on-chain metadata linking → **mitigate** by minimizing metadata and using hashing/salting where appropriate

### Compliance
- Aim to satisfy privacy principles analogous to **GDPR/HIPAA** (data minimization, auditability, access control)
- For real-world deployments include local legal review and data residency controls

## Offline / Low-Connectivity Strategy

### Offline-First UI
- **Local encrypted cache** of recent records and pending actions (IndexedDB)
- **Queue for transactions and uploads**: actions performed offline are queued and signed when network returns
- **Conflict resolution**: basic optimistic merge with manual review for conflicting updates

### Bandwidth Optimizations
- Upload diffs for large records (where applicable)
- Compress and chunk uploads to IPFS/S3

### Demo-Ready Offline Flow
Simulate offline grant/revoke and show queued txs that later broadcast to Hedera testnet.

## Identity & Access Model

### Wallet-Based Identity
- Users (patients/providers) authenticate using **HashPack wallet connect**
- Public wallet address acts as primary identifier; optionally map to a DID for richer identity metadata

### Provider Verification
- Off-chain provider verification (KYC) stored in backend as verified flag; provider wallet address included in consent checks

### Access Resolution
- On consent grant, symmetric key wrapped & encrypted for provider wallet public key
- Access evaluation happens client-side: provider must have private key to unwrap symmetric key

## Tech Stack

- **Frontend**: React 18 + TypeScript, Vite
- **UI**: Shadcn UI + Radix primitives, TailwindCSS
- **State & data**: React Query,
- **SDKs**: Hedera SDK, HashPack Wallet Connect
- **Storage**: IPFS , option for S3/Arweave
- **Date utils**: date-fns
- **Animations**: Framer Motion
- **Testing**: Vitest / React Testing Library
- **Linter/Formatter**: ESLint, Prettier
- **Package manager**: pnpm

## Getting Started (Detailed)

### Prerequisites

- Node.js (LTS)
- pnpm
- Hedera testnet account (account ID + keys) for local test transactions
- HashPack wallet installed (for demo users)

### Clone

```bash
git clone https://github.com/wheezard/AfriHealth-Ledger.git
cd AfriHealth-Ledger
```

### Install

```bash
pnpm install
```

### Environment

Create `.env` in project root (example variables):

```env
VITE_HEDERA_NETWORK=testnet
VITE_HEDERA_OPERATOR_ID=0.0.xxxxx
VITE_HEDERA_OPERATOR_KEY=302e02...
VITE_IPFS_GATEWAY=https://ipfs.io
VITE_API_URL=https://your-indexer.example.com # optional
```

For demo use, you can run without a backend; the frontend will interact directly with Hedera testnet via SDK.

### Local Development

```bash
pnpm dev
```

Open http://localhost:5173

### Run Tests & Linter

```bash
pnpm test
pnpm lint
```

### Build for Production

```bash
pnpm build
```

## Run / Demo Checklist

For hackathon submission:

- [ ] Deployed demo URL (Netlify / Vercel / static hosting) or a clear local run guide
- [ ] Hedera testnet transactions visible in Hedera explorer for core flows (create record, grant consent, revoke consent)
- [ ] HashPack wallet flows demonstrated in video and README
- [ ] 2–3 minute demo video: show create record, grant/revoke consent, offline queue, and audit viewer
- [ ] Architecture diagram image included in repo
- [ ] Short technical explanation of encryption/key wrapping included
- [ ] Minimal integration tests for consent flow

## Project Structure (Expanded)

```
src/
├── components/
│   ├── RecordForm/          # Create/update record forms + encryption hooks
│   ├── ConsentModal/        # Grant/revoke consent UI and HashPack flows
│   ├── AuditTrail/          # Transaction history viewer with Hedera links
│   └── Dashboard/           # Analytics and metrics components
├── contexts/
│   ├── WalletContext.tsx    # HashPack connection state & user wallet
│   └── ThemeContext.tsx
├── hooks/
│   ├── useHedera.ts         # Wrapper around Hedera SDK transactions
│   ├── useEncryption.ts     # Symmetric key gen, wrap/unwrap keys
│   └── useOfflineQueue.ts   # IndexedDB queue for offline actions
├── lib/
│   ├── ipfs.ts              # IPFS upload/download helpers
│   ├── storage.ts           # Encrypted storage helpers
│   └── analytics.ts
├── pages/
│   ├── Home.tsx
│   ├── Patient.tsx
│   └── Provider.tsx
├── services/
│   ├── indexer/             # Optional serverless indexer code
│   └── notifications.ts
└── App.tsx
```

## Testing & QA

- **Unit tests** for encryption utilities and Hedera transaction building
- **Integration tests** (Vitest + MSW) to mock IPFS & Hedera SDK for consent flows
- **Manual QA checklist**: wallet connect, tx broadcast, offline queue, audit trail links

## Deployment & Monitoring

### Deploy
- **Frontend** to Vercel/Netlify
- **Indexer** (optional) to run as serverless functions (AWS Lambda / Vercel Functions)

### Monitoring
- Uptime for indexer and webhook endpoints
- Track Hedera tx failures and retry queue length
- Basic analytics for consent events and clinic adoption

## Roadmap & Future Work

- Integrate **Hedera DID** for stronger identity mapping
- Add **selective disclosure** (verifiable credentials) for lab records
- Support **Arweave** for permanent archival storage
- Implement **granular RBAC** for facility admins
- Build **mobile app wrapper** (React Native / Capacitor) with native HashPack integration
- **Pilot with one clinic network** in Africa (measure real KPIs)

## Contributing

1. Fork the repo
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

Please include migration notes for any storage or Hedera contract changes.

## License & Acknowledgments

**License:** MIT — see LICENSE file.

**Built by:** [wheezard](https://github.com/wheezard)

### Thanks to:
- **Hedera** for blockchain infrastructure
- **HashPack** for wallet integration
- **Shadcn UI & Radix** for the component ecosystem

---

This README provides a comprehensive overview of the AfriHealth Ledger project, including its purpose, features, architecture, security measures, and development setup. It covers all the essential aspects of the project's functionality, technology stack, and potential future developments.