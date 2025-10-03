# Abu Snan Orthodox Church Website

A modern, accessible, and responsive website for Abu Snan Orthodox Church built with React and TailwindCSS.

## 🎨 Design System

This project uses a comprehensive design system built with TailwindCSS, featuring:

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #14b8a6)
- **Secondary**: Teal/Turquoise (#14b8a6 to #2dd4bf)
- **Accent**: Gold/Amber (#f59e0b)
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, Warning, Error, Info colors

### Typography
- **Display Font**: Cairo (Arabic) / Inter (English)
- **Body Font**: Inter (English) / Arabic)
- **Monospace**: JetBrains Mono

### Spacing Scale
- 8px baseline grid system
- Consistent spacing from 0.125rem to 24rem
- Responsive spacing with mobile-first approach

### Components
- **Button**: Multiple variants (primary, secondary, outline, ghost, danger)
- **Card**: Default, elevated, and interactive variants
- **FormField**: Input, textarea, select with validation
- **Modal**: Accessible modal with backdrop and focus management
- **Navigation**: Primary and secondary navigation components
- **Layout**: Page layout with header, content, and footer

## 🚀 Features

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus management
- ✅ ARIA attributes
- ✅ High contrast support

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- ✅ Flexible grid system
- ✅ Responsive typography
- ✅ Touch-friendly interactions

### Dark Mode
- ✅ System preference detection
- ✅ Manual toggle support
- ✅ Consistent theming
- ✅ Smooth transitions

### Performance
- ✅ Optimized images
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Minimal bundle size

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Code Quality
```bash
# Format code
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── FormField.jsx
│   │   ├── Modal.jsx
│   │   ├── PrimaryNav.jsx
│   │   ├── SecondaryNav.jsx
│   │   ├── Footer.jsx
│   │   ├── PageLayout.jsx
│   │   └── index.js
│   └── ImageSlider.jsx
├── context/
│   └── LanguageContext.jsx
├── data/
│   ├── demoData.js
│   └── translations/
│       ├── ar.json
│       └── en.json
├── pages/
│   ├── Home.jsx
│   ├── Youth.jsx
│   ├── SundaySchool.jsx
│   ├── Gallery.jsx
│   └── Contact.jsx
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Component Usage

### Button
```jsx
import { Button } from './components/ui';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```

### Card
```jsx
import { Card } from './components/ui';

<Card variant="elevated">
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Body>
    Card content
  </Card.Body>
</Card>
```

### FormField
```jsx
import { FormField } from './components/ui';

<FormField label="Name" error={errors.name} required>
  <FormField.Input type="text" name="name" />
</FormField>
```

## 🌐 Internationalization

The website supports Arabic (RTL) and English (LTR) with:
- Automatic language detection
- Manual language toggle
- RTL/LTR layout switching
- Localized content
- Proper font loading

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your primary color
  },
  // ... other colors
}
```

### Spacing
Modify the spacing scale in `tailwind.config.js`:

```javascript
spacing: {
  '2': '0.5rem',   // 8px
  '4': '1rem',     // 16px
  // ... other spacing
}
```

## 🚀 Deployment

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Vercel
1. Import your repository
2. Set framework: Vite
3. Deploy

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support, email info@abusnanchurch.org or create an issue in the repository.