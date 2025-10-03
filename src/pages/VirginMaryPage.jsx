import React, { useState, useEffect } from 'react';
import { PageLayout, Card, Button } from '../components/ui';
import { virginMaryInfo } from '../data/orthodoxData';

const VirginMaryPage = () => {
  const [activeTab, setActiveTab] = useState('basic');

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
              <span className='text-4xl'>👑</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-display'>
              {virginMaryInfo.basicInfo.name}
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-medium'>
              {virginMaryInfo.basicInfo.titles.join(' • ')}
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
                variant={activeTab === 'basic' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('basic')}
                className='px-6 py-3'
              >
                المعلومات الأساسية
              </Button>
              <Button
                variant={activeTab === 'feasts' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('feasts')}
                className='px-6 py-3'
              >
                الأعياد
              </Button>
              <Button
                variant={activeTab === 'prayers' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('prayers')}
                className='px-6 py-3'
              >
                الصلوات
              </Button>
              <Button
                variant={activeTab === 'apparitions' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('apparitions')}
                className='px-6 py-3'
              >
                الظهورات
              </Button>
            </div>
          </div>

          {/* Basic Information */}
          {activeTab === 'basic' && (
            <div className='max-w-4xl mx-auto'>
              <Card className="bg-white dark:bg-neutral-800 shadow-xl">
                <Card.Body className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                        المعلومات الأساسية
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            الألقاب:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {virginMaryInfo.basicInfo.titles.join(' • ')}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            الوالدان:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {virginMaryInfo.basicInfo.parents}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            الزوج:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {virginMaryInfo.basicInfo.spouse}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            الابن:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {virginMaryInfo.basicInfo.son}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-6xl">👑</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        العذراء مريم
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        والدة الإله
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Feasts */}
          {activeTab === 'feasts' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {virginMaryInfo.majorFeasts.map((feast) => (
                <Card key={feast.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎊</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {feast.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {feast.date}
                      </p>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {feast.description}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Prayers */}
          {activeTab === 'prayers' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {virginMaryInfo.prayers.map((prayer) => (
                <Card key={prayer.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🙏</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {prayer.name}
                      </h3>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-700 p-4 rounded-lg">
                      <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
                        {prayer.text}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Apparitions */}
          {activeTab === 'apparitions' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {virginMaryInfo.apparitions.map((apparition) => (
                <Card key={apparition.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">✨</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {apparition.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {apparition.location}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {apparition.year}
                      </p>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {apparition.description}
                    </p>
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

export default VirginMaryPage;
