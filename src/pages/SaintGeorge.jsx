import React from 'react';
import { PageLayout, Card, Button } from '../components/ui';
import { saintGeorgeInfo } from '../data/orthodoxData';

const SaintGeorge = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <div className='w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-4xl'>{saintGeorgeInfo.icon}</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-display'>
              {saintGeorgeInfo.name}
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-medium'>
              {saintGeorgeInfo.title}
            </p>
            <p className='text-lg text-white/80 mt-4'>
              {saintGeorgeInfo.feastDay}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='max-w-4xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-display">
                  عن القديس جاورجيوس
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p className="mb-6 text-lg">
                    {saintGeorgeInfo.description}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Patronage Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              شفيع
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {saintGeorgeInfo.patronOf}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    القديس جاورجيوس هو شفيع العديد من البلدان والمهن
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Miracles Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              المعجزات
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {saintGeorgeInfo.miracles.map((miracle, index) => (
              <Card key={index} className="bg-white dark:bg-neutral-800 shadow-xl">
                <Card.Body className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {miracle}
                    </h3>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              الألوان المقدسة
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {saintGeorgeInfo.colors.map((color, index) => (
                    <div key={index} className="p-4">
                      <div className={`w-16 h-16 rounded-full mx-auto mb-3 ${
                        color === 'أحمر' ? 'bg-red-500' :
                        color === 'أبيض' ? 'bg-white border-2 border-gray-300' :
                        'bg-blue-500'
                      }`}></div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        {color}
                      </h3>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SaintGeorge;
