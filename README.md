# Final Website (Next.js + TypeScript + Tailwind)

Production-ready website built with Next.js App Router, TypeScript, Tailwind CSS, Razorpay payments, PDF receipts, and admin panel.

## Features
- Next.js 14 App Router (TS) with modern layout and sections
- Tailwind CSS styling
- Razorpay integration for fee payments (order, verify, receipt)
- PDF receipt generation (pdf-lib) and email notifications (Nodemailer)
- Admin panel with auth (cookie-based) and payments table
- File-backed JSON storage for dev (can swap to DB later)

## Tech Stack
- Next.js 14, React 18, TypeScript
- Tailwind CSS
- Razorpay SDK
- pdf-lib for PDFs
- Nodemailer for email

## Quick Start (Windows PowerShell)

```powershell
npm install
npm run dev:3002
```

Open http://127.0.0.1:3002

If 3002 is busy, use `npm run dev` or `npm run dev:3001`.

## Environment Variables (.env)

Copy `.env.example` to `.env` and fill in:

```
ADMIN_PASSWORD=change-me
ADMIN_EMAIL_TO=admin@example.com
ADMIN_EMAIL_FROM=no-reply@example.com

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass

RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=xxx
```

Notes:
- If `ADMIN_PASSWORD` is not set, a default fallback may be used in dev; set it explicitly for security.
- Email will be skipped if SMTP or admin emails are not configured.

## Payments Flow
1. User fills form at `/pay-fees`.
2. Backend creates Razorpay order: `POST /api/pay-fees`.
3. Razorpay Checkout completes; frontend posts to `POST /api/pay-fees/verify`.
4. Verify signature, fetch payment details, update record.
5. Generate PDF receipt and send email to admin + student.
6. Success page shows summary and receipt link.

Receipt download: `/api/pay-fees/receipt/:id` streams a PDF.

## Admin Panel

- Login: `/admin/login` (cookie-based)
- Dashboard: `/admin`
- Payments: `/admin/payments` (status, amount, receipt links)

## Scripts

```powershell
npm run dev        # Dev on 3000
npm run dev:3001   # Dev on 3001 (127.0.0.1)
npm run dev:3002   # Dev on 3002 (127.0.0.1)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

## Logo

Header and admin login logos are centralized in `lib/site-config.ts`.
Place files under `public/` and update `SITE_LOGO` and `SITE_LOGO_ALT`.

## Notes

- This repo uses a JSON file for payments in `data/payments.json` during development. Replace with a DB for production use.
- PDF receipts are generated on the fly. Email includes PDF as attachment when SMTP is configured.
- Tailwind and TypeScript are pre-configured.

## Deployment

Build with `npm run build` and deploy the `.next` output on a Node runtime or a serverless platform that supports Next.js 14 (App Router).
