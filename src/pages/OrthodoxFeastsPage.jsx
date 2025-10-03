import React, { useState, useEffect } from 'react';
import { PageLayout, Card, Button } from '../components/ui';
import { orthodoxFeasts } from '../data/orthodoxData';

const OrthodoxFeastsPage = () => {
  const [activeTab, setActiveTab] = useState('major');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <div className='w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-4xl'>🎉</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-display'>
              الأعياد الأرثوذكسية
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-medium'>
              احتفالات الكنيسة الأرثوذكسية المقدسة
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <Button
                variant={activeTab === 'major' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('major')}
                className='px-6 py-3'
              >
                الأعياد الرئيسية
              </Button>
              <Button
                variant={activeTab === 'minor' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('minor')}
                className='px-6 py-3'
              >
                الأعياد الثانوية
              </Button>
              <Button
                variant={activeTab === 'fasting' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('fasting')}
                className='px-6 py-3'
              >
                فترات الصوم
              </Button>
            </div>
          </div>

          {/* Major Feasts */}
          {activeTab === 'major' && (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
              {orthodoxFeasts.majorFeasts.map((feast) => (
                <Card key={feast.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎊</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feast.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {feast.date}
                      </p>
                    </div>
                    
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-sm">
                      {feast.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded-full">
                        {feast.importance}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        التقاليد:
                      </h4>
                      <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                        {feast.traditions.map((tradition, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {tradition}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Minor Feasts */}
          {activeTab === 'minor' && (
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
              {orthodoxFeasts.minorFeasts.map((feast) => (
                <Card key={feast.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg">⭐</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feast.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {feast.date}
                      </p>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {feast.description}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Fasting Periods */}
          {activeTab === 'fasting' && (
            <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              {orthodoxFeasts.fastingPeriods.map((fast) => (
                <Card key={fast.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🙏</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {fast.name}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {fast.duration}
                      </p>
                    </div>
                    
                    <p className="text-neutral-700 dark:text-neutral-300 mb-4 text-sm">
                      {fast.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        قواعد الصوم:
                      </h4>
                      <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                        {fast.rules.map((rule, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default OrthodoxFeastsPage;
