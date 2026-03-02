# 30A Bonfire Service

Marketing website for 30A Bonfire Service — a beach bonfire setup service along Scenic Highway 30A in South Walton, Florida. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Lead Capture:** Supabase
- **Lead Notifications:** Resend
- **Booking:** FareHarbor (external checkout link)
- **Deployment:** Vercel

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd 30ABonfires
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g., `https://30abonfireservice.com`) |
| `NEXT_PUBLIC_FAREHARBOR_CHECKOUT_URL` | Your FareHarbor booking page URL |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key (legacy name) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key (new format, `sb_publishable_...`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only, used for duplicate checks + richer inserts) |
| `RESEND_API_KEY` | Resend API key for lead notification emails |
| `CONTACT_NOTIFICATION_FROM_EMAIL` | Verified Resend sender (e.g. `30A Bonfires <leads@yourdomain.com>`) |
| `CONTACT_NOTIFICATION_TO_EMAIL` | Inbox that should receive lead alerts (defaults to `siteConfig.email`) |

### 3. Set up Supabase (lead capture)

Create a new Supabase project and run this SQL in the SQL Editor:

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  preferred_town TEXT,
  date_requested TEXT,
  message TEXT,
  source_page TEXT,
  status TEXT DEFAULT 'new',
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT WITH CHECK (true);

-- Helpful index for duplicate-check logic
CREATE INDEX leads_email_created_at_idx ON leads (email, created_at DESC);
```

If you already created `leads` without `status`/`metadata`, run:

```sql
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::jsonb;
CREATE INDEX IF NOT EXISTS leads_email_created_at_idx ON leads (email, created_at DESC);
```

### 4. Set up lead notification email (optional, recommended)

This project can email every contact submission through Resend.

1. Verify a sender domain in Resend
2. Set `RESEND_API_KEY`, `CONTACT_NOTIFICATION_FROM_EMAIL`, and `CONTACT_NOTIFICATION_TO_EMAIL`
3. Submit a test lead from `/contact`

If Resend is not configured, submissions still save to Supabase.

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your repo to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Add your environment variables in the Vercel dashboard
4. Deploy

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── services/         # /services
│   ├── about/            # /about
│   ├── gallery/          # /gallery
│   ├── contact/          # /contact
│   ├── areas/[slug]/     # /areas/inlet-beach, /areas/seaside, etc.
│   ├── sitemap.ts        # Dynamic sitemap generation
│   └── robots.ts         # robots.txt generation
├── components/           # Reusable React components
├── lib/                  # Config, data, utilities
│   ├── config.ts         # Central business config (NAP, hours, etc.)
│   ├── areas-data.ts     # 15 town/area data objects
│   ├── faqs-data.ts      # FAQ content
│   ├── gallery-data.ts   # Gallery image metadata
│   ├── schemas.ts        # JSON-LD schema generators
│   ├── supabase.ts       # Public Supabase client
│   ├── supabase-server.ts # Server-only Supabase service-role client
│   ├── contact-notifications.ts # Lead email notifications
│   └── metadata.ts       # Shared metadata helpers
└── actions/              # Server actions
    └── contact.ts        # Contact form submission
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with how it works, service area, testimonials, FAQ |
| `/services` | Packages, pricing, what's included |
| `/about` | Company story, values, service area, rain policy |
| `/gallery` | Photo gallery with occasions |
| `/contact` | Contact form + business info + booking CTA |
| `/areas/[slug]` | 15 hyper-local town pages (Inlet Beach through Sandestin) |

## SEO Features

- **JSON-LD** on every page: LocalBusiness, Service, FAQPage, AggregateRating, BreadcrumbList
- **Meta tags** per page with Open Graph and Twitter cards
- **Canonical URLs** on every page
- **Sitemap** at `/sitemap.xml` (20 URLs: 5 core + 15 areas)
- **robots.txt** at `/robots.txt`
- **Internal linking** between area pages and core pages

## Customization Checklist

After cloning, update the following:

- [ ] Replace `NEXT_PUBLIC_FAREHARBOR_CHECKOUT_URL` in `.env.local` with your real FareHarbor URL
- [ ] Update phone, email, and street address in `src/lib/config.ts`
- [ ] Update business hours in `src/lib/config.ts`
- [ ] Update social media links in `src/lib/config.ts`
- [ ] Swap placeholder images in `public/images/` with real photos
- [ ] Replace placeholder reviews in `src/lib/schemas.ts` (`generateAggregateRatingSchema`)
- [ ] Replace placeholder testimonials on the homepage (`src/app/page.tsx`)
- [ ] Update/expand FAQs in `src/lib/faqs-data.ts` with real business answers
- [ ] Set Supabase environment variables and run the SQL schema
- [ ] Deploy to Vercel
- [ ] Verify `/sitemap.xml` and `/robots.txt` are accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph previews with Facebook Sharing Debugger and Twitter Card Validator
