# Premium Portfolio Website

A stunning, fully-responsive portfolio website for a dual-role professional - Graphic Designer & Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200)

## Features

### Design & UX
- **Glassmorphism Design** - Translucent panels with backdrop blur effects
- **Dark/Light Mode** - Seamless theme switching with animated toggle
- **Smooth Animations** - Framer Motion powered scroll reveals and micro-interactions
- **Responsive Layout** - Mobile-first design that works on all devices

### Sections
1. **Hero** - High-impact introduction with dual-threat value proposition
2. **Projects** - Dynamic masonry grid showcasing recent work
3. **Services & Pricing** - Glassmorphic pricing cards with tabs for Design, Development, and Custom Features
4. **Contact** - Functional contact form with WhatsApp integration
5. **Admin Panel** - Protected CMS for managing projects and viewing messages

### Tech Stack
- React 18 + TypeScript
- Vite (Build Tool)
- Tailwind CSS 3
- Framer Motion
- shadcn/ui Components
- Lucide React Icons
- react-masonry-css

## Admin Panel

### Default Credentials
- **Username:** `admin`
- **Password:** `portfolio2026`

### Features
- **Projects Management** - Create, Read, Update, Delete portfolio projects
- **Messages** - View contact form submissions
- **Local Storage** - All data persists in browser localStorage

## Services & Pricing

### Graphic Design Packages
- **Identity Starter:** ₹15,000 – ₹25,000
- **Brand Pro:** ₹40,000 – ₹65,000
- **The Creative Suite:** ₹80,000+

### Full Stack Development
- **MVP / Portfolio:** ₹45,000 – ₹75,000
- **Business Hub:** ₹1,20,000 – ₹2,50,000
- **SaaS / E-commerce:** ₹4,00,000+

### Custom Features
- Payment Gateway Integration: ₹15,000+
- Custom User Dashboard: ₹45,000+
- Third-Party API Integration: ₹12,000 – ₹30,000
- Real-time Capabilities: ₹35,000+
- Advanced PWA Setup: ₹20,000+

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project
```bash
cd app
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Customization

### Changing Personal Information
Edit the content directly in the section files:
- `src/sections/Hero.tsx` - Hero section content
- `src/sections/Services.tsx` - Pricing and services
- `src/sections/Contact.tsx` - Contact information

### Adding Projects
1. Navigate to the Admin panel (`#admin`)
2. Login with credentials
3. Click "Add Project"
4. Fill in project details
5. Save

### Changing Admin Credentials
Edit the `defaultCredentials` object in `src/sections/Admin.tsx`:
```typescript
const defaultCredentials = {
  username: 'your-username',
  password: 'your-password',
};
```

### Changing WhatsApp Number
Edit the `whatsappLink` in `src/sections/Contact.tsx`:
```typescript
const whatsappLink = `https://wa.me/YOUR_NUMBER?text=${whatsappMessage}`;
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Navigation.tsx
│   └── ThemeProvider.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Admin.tsx
│   └── Footer.tsx
├── types/
│   └── index.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css
└── main.tsx
```

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Design & Development: CreativeDev
- Icons: [Lucide React](https://lucide.dev)
- UI Components: [shadcn/ui](https://ui.shadcn.com)
"# porto" 
