# Setup Guide

## Important: iCloud Drive Issue

This project is currently located in iCloud Drive, which causes permission errors when running Node.js. 

### Solution: Move Project to Local Directory

To run this project locally, you need to move it outside of iCloud Drive:

```bash
# Create a local projects directory
mkdir -p ~/projects

# Copy the project to local directory
cp -R "/Users/williammartinez/Library/Mobile Documents/com~apple~CloudDocs/Documents/PROYECTOS/CONVEXO/convexoprotocol/webisteconvexoprotocol" ~/projects/convexo-website

# Navigate to the new location
cd ~/projects/convexo-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

The website will be available at `http://localhost:3000`

## Alternative: Deploy Directly to Vercel

You can skip local development and deploy directly to Vercel:

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Initialize git in the project (from a local copy):
     ```bash
     cd ~/projects/convexo-website
     git init
     git add .
     git commit -m "Initial commit: Convexo Protocol website"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in minutes

## What's Been Built

Your professional institutional website includes:

### ✅ Pages & Sections:
- **Hero Section**: Eye-catching landing with gradient background and trust indicators
- **Products Section**: 5 detailed product cards:
  - Tokenized Corporate Bonds (with AI credit scoring)
  - Digital Assets Treasury
  - Local Stablecoins for LATAM (ECOP)
  - OTC Services
  - Payments
- **About Us Section**: Company vision, approach, and statistics
- **Navigation Bar**: With smooth scrolling and "Launch App" button
- **Footer**: Complete with social links and site navigation

### ✅ Features:
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Professional animations and transitions
- Your brand colors integrated throughout
- Link to fund.convexo.xyz app
- Modern gradient effects
- SEO optimized

### ✅ Technical:
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Optimized for production
- No blockchain dependencies (simple marketing site)

## Brand Colors Used:
- Purple: `#401777`
- Navy: `#081F5C`
- Blue: `#334EAC`
- Light Blue: `#BAD6EB`
- Cream: `#FFF9EF`

## Next Steps:

1. Move project to local directory (see above)
2. Test locally: `npm run dev`
3. Push to GitHub
4. Deploy to Vercel
5. Update DNS settings to point your domain to Vercel
6. Add your social media links in `components/Footer.tsx`

## Need Help?

If you encounter any issues, check:
- Node.js version (should be 18+)
- Make sure you're not running from iCloud Drive
- Clear node_modules and reinstall if needed

