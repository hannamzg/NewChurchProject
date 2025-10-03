import React, { useState } from 'react';
import { PageLayout, Card, Button } from '../components/ui';
import { orthodoxPrayers, orthodoxSaints } from '../data/orthodoxData';

const OrthodoxPrayersPage = () => {
  const [activeTab, setActiveTab] = useState('daily');

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <div className='w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-4xl'>🙏</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-display'>
              الصلوات الأرثوذكسية
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-medium'>
              صلوات وترانيم الكنيسة الأرثوذكسية المقدسة
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
                variant={activeTab === 'daily' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('daily')}
                className='px-6 py-3'
              >
                الصلوات اليومية
              </Button>
              <Button
                variant={activeTab === 'hymns' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('hymns')}
                className='px-6 py-3'
              >
                الترانيم
              </Button>
              <Button
                variant={activeTab === 'saints' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('saints')}
                className='px-6 py-3'
              >
                القديسين
              </Button>
            </div>
          </div>

          {/* Daily Prayers */}
          {activeTab === 'daily' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {orthodoxPrayers.dailyPrayers.map((prayer) => (
                <Card key={prayer.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🙏</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {prayer.name}
                      </h3>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg">
                      <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed text-center">
                        {prayer.text}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Hymns */}
          {activeTab === 'hymns' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {orthodoxPrayers.hymns.map((hymn) => (
                <Card key={hymn.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎵</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {hymn.name}
                      </h3>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg">
                      <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed text-center">
                        {hymn.text}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Saints */}
          {activeTab === 'saints' && (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
              {orthodoxSaints.map((saint) => (
                <Card key={saint.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg">👼</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {saint.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {saint.feastDay}
                      </p>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {saint.description}
                      </p>
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

export default OrthodoxPrayersPage;
