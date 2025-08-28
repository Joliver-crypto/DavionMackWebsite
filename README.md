# Davion Mack Artist Website

A clean, professional artist website built with Next.js, TypeScript, and Tailwind CSS. Features a horizontal scrolling timeline of artworks, shop functionality, and artist information.

## Features

- **Horizontal Timeline**: Scrollable timeline showing artworks from 2025 back to 2020
- **Responsive Design**: Mobile-first design with touch/swipe support
- **Shop Integration**: Display available works with pricing and contact forms
- **Professional Aesthetic**: Clean white design with charcoal accents
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **SEO Optimized**: OpenGraph, Twitter cards, and proper metadata

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DMackWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Generate placeholder images:
```bash
npm run generate-placeholders
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
DMackWebsite/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (timeline)
│   ├── shop/page.tsx      # Shop page
│   └── about/page.tsx     # About page
├── components/             # React components
│   ├── Header.tsx         # Fixed navigation header
│   ├── Timeline.tsx       # Horizontal timeline container
│   ├── TimelineItem.tsx   # Individual artwork cards
│   ├── LightboxModal.tsx  # Artwork detail modal
│   └── ShopGrid.tsx       # Shop grid layout
├── data/                   # Content data
│   ├── works.json         # Artwork information
│   └── about.json         # Artist information
├── types/                  # TypeScript definitions
│   └── work.ts            # Data interfaces
├── public/                 # Static assets
│   └── placeholders/      # Placeholder images and files
└── scripts/                # Utility scripts
    └── generate-placeholders.js
```

## Customization

### Replacing Placeholder Images

1. **Artwork Images**: Replace files in `public/placeholders/`:
   - `work-01.jpg` through `work-10.jpg`
   - Recommended size: 400x400px, JPG format
   - Maintain consistent aspect ratios

2. **Artist Photo**: Replace `public/placeholders/davion.jpg`:
   - Recommended size: 400x400px, square format
   - Professional headshot or artist portrait

3. **OG Image**: Replace `public/placeholders/og-image.jpg`:
   - Recommended size: 1200x630px
   - Used for social media sharing

### Updating Content

#### Artwork Information (`data/works.json`)

```json
{
  "slug": "unique-identifier",
  "title": "Artwork Title",
  "year": 2025,
  "materials": "Materials used",
  "cover": "/path/to/image.jpg",
  "images": ["/path/to/image.jpg"],
  "forSale": true,
  "price": 2500,
  "status": "Available"
}
```

**Status Options:**
- `"Available"` - Green badge, shows Buy/Enquire button
- `"Reserved"` - Yellow badge, shows Enquire button
- `"Sold"` - Gray badge, shows Enquire button
- `"Not for Sale"` - Hidden from shop

#### Artist Information (`data/about.json`)

```json
{
  "name": "Davion Mack",
  "degreeLine": "MFA at Davis, California",
  "photo": "/path/to/photo.jpg",
  "bio": "Artist statement and biography",
  "cv": "/path/to/cv.pdf",
  "instagram": "https://www.instagram.com/davionjmack/"
}
```

### Adding New Artworks

1. Add new entry to `data/works.json`
2. Place image in `public/` directory
3. Update `cover` and `images` paths
4. Set `forSale` and `price` as needed

### Styling Customization

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Typography**: Update font families in `tailwind.config.js`
- **Spacing**: Adjust timeline spacing in `components/TimelineItem.tsx`

## Timeline Configuration

The horizontal timeline automatically:
- Sorts works by year (newest first)
- Positions items alternately above/below the center spine
- Maintains consistent spacing (480px between items)
- Supports horizontal scrolling and arrow navigation

### Timeline Spacing

- **Desktop**: 480px between items
- **Tablet**: 360px between items  
- **Mobile**: 260px between items

Adjust these values in `components/TimelineItem.tsx`:

```typescript
const horizontalOffset = index * 480 // Change 480 to desired spacing
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

3. Deploy the `out/` directory to your hosting platform

## Performance Optimization

- Images are automatically optimized with Next.js Image component
- Timeline items are lazy-loaded for better performance
- CSS is purged in production builds
- Static assets are cached and compressed

## Accessibility Features

- **Keyboard Navigation**: Arrow keys for timeline scrolling
- **Focus Management**: Modal focus trapping and restoration
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **High Contrast**: White/charcoal color scheme

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Common Issues

1. **Placeholder images not loading**:
   - Run `npm run generate-placeholders`
   - Check file paths in `data/works.json`

2. **Timeline not scrolling**:
   - Ensure CSS is properly loaded
   - Check for JavaScript errors in console

3. **Build errors**:
   - Verify TypeScript types in `types/work.ts`
   - Check import paths in components

### Development Tips

- Use browser dev tools to inspect timeline positioning
- Test responsive behavior at different screen sizes
- Verify accessibility with screen reader testing tools

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team or refer to the Next.js and Tailwind CSS documentation.

---

**Built with ❤️ for Davion Mack**
