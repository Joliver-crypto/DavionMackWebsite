# Deployment Guide

## Vercel (Recommended)

Vercel is the platform created by the creators of Next.js and provides the best integration and performance.

### Automatic Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js settings

3. **Configure Domain** (Optional):
   - Add custom domain in Vercel dashboard
   - Update `sitemap.ts` and `robots.txt` with your domain

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Drag and drop the `.next` folder to Netlify
   - Or connect your GitHub repository

## Other Platforms

### Static Export

1. **Update next.config.js**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

3. **Deploy the `out/` folder** to any static hosting service

## Environment Variables

Create a `.env.local` file for local development:

```bash
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact form
CONTACT_EMAIL=davionmack@outlook.com
```

## Performance Optimization

### Image Optimization

- Use `next/image` for automatic optimization
- Provide proper `sizes` attribute for responsive images
- Use WebP format when possible

### Bundle Analysis

Analyze your bundle size:

```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.js`:

```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:

```bash
ANALYZE=true npm run build
```

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard for performance insights.

### Error Tracking

Consider adding error tracking:

```bash
npm install @sentry/nextjs
```

## SSL and Security

- Vercel provides automatic SSL
- Enable security headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

## Troubleshooting

### Build Errors

1. **TypeScript errors**: Run `npm run lint` to check types
2. **Image errors**: Verify all placeholder images exist
3. **Dependency issues**: Delete `node_modules` and reinstall

### Runtime Errors

1. **Check browser console** for JavaScript errors
2. **Verify API routes** if using dynamic data
3. **Check environment variables** are properly set

### Performance Issues

1. **Use Lighthouse** to audit performance
2. **Optimize images** and reduce bundle size
3. **Enable compression** on your hosting platform

## Post-Deployment

1. **Test all routes** on the live site
2. **Verify images** are loading correctly
3. **Check mobile responsiveness**
4. **Test accessibility** with screen readers
5. **Monitor performance** with tools like PageSpeed Insights

---

For more help, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
