import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className='relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl'>
      {/* Main Image */}
      <div className='relative w-full h-full'>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className='w-full h-full object-cover transition-opacity duration-500'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

        {/* Content */}
        <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
          <h3 className='text-2xl md:text-3xl font-bold mb-2'>
            {images[currentIndex].title}
          </h3>
          <p className='text-lg opacity-90'>
            {images[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300'
            aria-label='Previous image'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300'
            aria-label='Next image'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
