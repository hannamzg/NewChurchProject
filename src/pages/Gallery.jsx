import React, { useState, useEffect } from 'react';
import { Card, PageLayout } from '../components/ui';
import { galleryImages } from '../data/demoData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  // Get unique categories and years
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const years = ['all', ...new Set(galleryImages.map(img => img.year))];

  // Filter images based on selected category and year
  useEffect(() => {
    let filtered = galleryImages;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    if (selectedYear !== 'all') {
      filtered = filtered.filter(img => img.year === selectedYear);
    }
    
    setFilteredImages(filtered);
  }, [selectedCategory, selectedYear]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
        <div className="relative container-app section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-2 border-white/20">
                <span className="text-6xl">📸</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg text-display">
              معرض الصور
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-white/90 font-medium">
              اكتشف لحظات جميلة من حياة الكنيسة الأرثوذكسية
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              تصفح المعرض
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mr-4">التصنيف:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {category === 'all' ? 'الكل' : 
                   category === 'church' ? 'الكنيسة' :
                   category === 'youth' ? 'الشبيبة' :
                   category === 'sundaySchool' ? 'مدرسة الأحد' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mr-4">السنة:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-secondary-500 text-white shadow-lg'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-secondary-100 dark:hover:bg-secondary-900/20'
                  }`}
                >
                  {year === 'all' ? 'الكل' : year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800">
        <div className="container-app">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  variant="interactive"
                  className="overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-4xl">🔍</span>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 line-clamp-2">
                      {image.caption}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
                      <span className="bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full">
                        {image.category === 'church' ? 'الكنيسة' :
                         image.category === 'youth' ? 'الشبيبة' :
                         image.category === 'sundaySchool' ? 'مدرسة الأحد' : image.category}
                      </span>
                      <span>{image.year}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">
                لا توجد صور
              </h3>
              <p className="text-neutral-500 dark:text-neutral-500">
                لا توجد صور تطابق الفلاتر المحددة
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-xl">×</span>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-xl">‹</span>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <span className="text-xl">›</span>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.caption}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {selectedImage.category === 'church' ? 'الكنيسة' :
                   selectedImage.category === 'youth' ? 'الشبيبة' :
                   selectedImage.category === 'sundaySchool' ? 'مدرسة الأحد' : selectedImage.category}
                </span>
                <span>{selectedImage.year}</span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;