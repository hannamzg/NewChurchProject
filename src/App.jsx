import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PrimaryNav, Footer, PageLayout } from './components/ui';

// Pages
import Home from './pages/Home';
import SaintGeorgePage from './pages/SaintGeorgePage';
import OrthodoxFeastsPage from './pages/OrthodoxFeastsPage';
import JesusChristPage from './pages/JesusChristPage';
import VirginMaryPage from './pages/VirginMaryPage';
import OrthodoxPrayersPage from './pages/OrthodoxPrayersPage';
import Youth from './pages/Youth';
import SundaySchool from './pages/SundaySchool';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Navigation items
const navigationItems = [
  { key: 'home', label: 'الرئيسية', path: '/' },
  { key: 'youth', label: 'الشبيبة', path: '/youth' },
  { key: 'sundaySchool', label: 'مدرسة الأحد', path: '/sunday-school' },
  { key: 'gallery', label: 'المعرض', path: '/gallery' },
  { key: 'contact', label: 'اتصل بنا', path: '/contact' },
];

// Footer sections
const footerSections = [
  { key: 'home', label: 'الرئيسية', path: '/' },
  { key: 'youth', label: 'الشبيبة', path: '/youth' },
  { key: 'sundaySchool', label: 'مدرسة الأحد', path: '/sunday-school' },
  { key: 'gallery', label: 'المعرض', path: '/gallery' },
  { key: 'contact', label: 'اتصل بنا', path: '/contact' },
];

// Contact information
const contactInfo = {
  address: 'كنيسة القديس جاورجيوس للروم الأرثوذكس، قرية أبو سنان، الجليل، إسرائيل',
  phone: '+972-4-123-4567',
  email: 'info@abusnanchurch.org',
  description:
    'كنيسة القديس جاورجيوس للروم الأرثوذكس في قرية أبو سنان تُعد من أبرز المعالم الروحية في الجليل، وهي بيت يجمع المؤمنين للصلاة، العبادة، والاحتفال بأهم المناسبات الدينية.',
};

// Social links
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/abusnanchurch/?locale=ar_AR',
    icon: (
      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/abusnanchurch',
    icon: (
      <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781H7.83v7.562h8.449V7.207z' />
      </svg>
    ),
  },
];

function App() {
  return (
    <LanguageProvider>
      <Router>
        <PageLayout
          header={<PrimaryNav items={navigationItems} />}
          footer={
            <Footer
              sections={footerSections}
              contact={contactInfo}
              socialLinks={socialLinks}
            />
          }
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/saint-george' element={<SaintGeorgePage />} />
            <Route path='/orthodox-feasts' element={<OrthodoxFeastsPage />} />
            <Route path='/jesus-christ' element={<JesusChristPage />} />
            <Route path='/virgin-mary' element={<VirginMaryPage />} />
            <Route path='/orthodox-prayers' element={<OrthodoxPrayersPage />} />
            <Route path='/youth' element={<Youth />} />
            <Route path='/sunday-school' element={<SundaySchool />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </PageLayout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
