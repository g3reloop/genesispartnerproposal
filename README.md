# Genesis Route Partner Proposal

A high-impact, single-page proposal website targeting local waste carriers for partnership opportunities.

## 🎯 Purpose

Secure partnerships with waste carriers who will cover the £184 waste carrier registration fee in exchange for a custom AI logistics agent that automates:
- Waste Transfer Notes (WTNs)
- Route optimization
- Compliance tracking
- Driver performance monitoring

## 🚀 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom Mythic Tech theme
- **Animations**: Framer Motion
- **Database**: Supabase (for lead capture)
- **Deployment**: Netlify

## 📦 Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase credentials

4. Create Supabase table:
   ```sql
   CREATE TABLE partner_inquiries (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     business_name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

5. Run development server:
   ```bash
   npm run dev
   ```

## 🎨 Design Philosophy

**Pragmatic Recursion**: UI reflects system truth with no decoration, only necessary feedback loops.

**Mythic Tech Aesthetic**: 
- Deep earth green (#1e3f2a)
- Electric recursion blue (#2c7da0)
- Pragmatic gray (#4a4a4a)
- Alert blood orange (#d14502)

## 📝 Content Strategy

Direct, high-value messaging that speaks to:
- Efficiency gains
- Profit optimization
- Administrative burden reduction

No fluff. Only operational truth.

## 🌐 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Connect GitHub repository
   - Set environment variables in Netlify dashboard
   - Deploy

## 🤝 Partnership Model

**Trade, Not Transaction**
- They get: Custom AI tool saving hours weekly
- We get: £184 certification + operational knowledge
- Result: Mutual benefit, no ongoing fees

## 📧 Email Notifications

All form submissions are:
1. Stored in Supabase `partner_inquiries` table
2. Can be configured to send automatic email notifications to warren@genesisreloop.com

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.
