# Netlify Deployment Guide

This guide will help you deploy the Genesis Route Partner Proposal site to Netlify.

## Prerequisites

✅ Project is built successfully (`npm run build`)
✅ Netlify CLI is installed locally
✅ Environment variables are configured

## Deployment Options

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Login to Netlify**:
   ```bash
   npx netlify login
   ```

2. **Initialize the site**:
   ```bash
   npx netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Name your site (e.g., "genesis-route-partner")

3. **Set environment variables**:
   ```bash
   npx netlify env:set NEXT_PUBLIC_SUPABASE_URL "your-supabase-url"
   npx netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "your-supabase-anon-key"
   ```

4. **Deploy**:
   ```bash
   npx netlify deploy --prod
   ```

### Option 2: Deploy via GitHub + Netlify Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Genesis Route Partner Proposal"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Click "Deploy site"

### Option 3: Manual Deploy (Quick Test)

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy draft**:
   ```bash
   npx netlify deploy
   ```
   - Follow prompts to create new site
   - This creates a draft URL for testing

3. **Deploy to production**:
   ```bash
   npx netlify deploy --prod
   ```

## Post-Deployment

After deployment:

1. **Custom Domain** (optional):
   - Go to Site settings → Domain management
   - Add custom domain (e.g., partner.genesisreloop.com)
   - Follow DNS configuration instructions

2. **Email Notifications**:
   - If using Supabase Edge Functions, deploy them separately
   - Configure webhooks in Supabase dashboard
   - See EMAIL_SETUP.md for details

3. **Test the Site**:
   - Visit your Netlify URL
   - Test form submission
   - Verify all animations and effects work
   - Check mobile responsiveness

## Environment Variables Required

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Useful Commands

- **Check deployment status**: `npx netlify status`
- **Open site dashboard**: `npx netlify open`
- **View deployment logs**: `npx netlify logs`
- **Update environment variables**: `npx netlify env:set KEY value`

## Troubleshooting

- If build fails, check the build logs in Netlify dashboard
- Ensure all environment variables are set correctly
- Make sure `.env.local` is in `.gitignore` (it already is)
- For Next.js specific issues, check the [@netlify/plugin-nextjs](https://github.com/netlify/netlify-plugin-nextjs) documentation

Your site will be available at: `https://your-site-name.netlify.app`
