import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

/**
 * Swiper Slider component with modern features
 * 
 * @param {Object} props - Component props
 * @param {Array} props.images - Array of image objects
 * @param {boolean} props.autoplay - Enable autoplay
 * @param {number} props.interval - Autoplay interval in ms
 * @param {boolean} props.loop - Enable loop
 * @param {string} props.effect - Swiper effect (slide, fade, etc.)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props
 */
const SwiperSlider = ({
  images = [],
  autoplay = true,
  interval = 4000,
  loop = true,
  effect = 'slide',
  className = '',
  rtl = true,
  ...rest
}) => {
  const swiperRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (swiperRef.current && autoplay) {
      const swiper = swiperRef.current.swiper;
      if (swiper) {
        swiper.autoplay.start();
      }
    }
  }, [autoplay]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`swiper-container relative ${className}`} {...rest}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={loop}
        effect={effect}
        dir={rtl ? 'rtl' : 'ltr'}
        autoplay={autoplay ? {
          delay: interval,
          disableOnInteraction: false,
        } : false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        className="swiper rounded-xl shadow-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative w-full h-96 md:h-[500px] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              
              {/* Click to view indicator */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-display">
                  {image.title}
                </h3>
                <p className="text-lg opacity-90">
                  {image.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Inside the container */}
      <div className={`swiper-button-prev absolute ${rtl ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={rtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
        </svg>
      </div>
      
      <div className={`swiper-button-next absolute ${rtl ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={rtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
        </svg>
      </div>

      {/* Pagination - Inside the container */}
      <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/30 transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-display">
                    {selectedImage.title}
                  </h3>
                  <p className="text-lg opacity-90">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperSlider;
