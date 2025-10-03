import React, { useState, useEffect } from 'react';
import { PageLayout, Card, Button } from '../components/ui';
import { jesusChristInfo } from '../data/orthodoxData';

const JesusChristPage = () => {
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
              <span className='text-4xl'>✝️</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 text-display'>
              {jesusChristInfo.basicInfo.name}
            </h1>
            <p className='text-xl md:text-2xl text-white/90 font-medium'>
              {jesusChristInfo.basicInfo.titles.join(' • ')}
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
                variant={activeTab === 'teachings' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('teachings')}
                className='px-6 py-3'
              >
                التعاليم
              </Button>
              <Button
                variant={activeTab === 'miracles' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('miracles')}
                className='px-6 py-3'
              >
                المعجزات
              </Button>
              <Button
                variant={activeTab === 'parables' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('parables')}
                className='px-6 py-3'
              >
                الأمثال
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
                            {jesusChristInfo.basicInfo.titles.join(' • ')}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            مكان الميلاد:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {jesusChristInfo.basicInfo.birth}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            بداية الخدمة:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {jesusChristInfo.basicInfo.ministry}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            مكان الصلب:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {jesusChristInfo.basicInfo.crucifixion}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                            القيامة:
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {jesusChristInfo.basicInfo.resurrection}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-6xl">✝️</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        يسوع المسيح
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        ابن الله والمخلص
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )}

          {/* Teachings */}
          {activeTab === 'teachings' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {jesusChristInfo.teachings.map((teaching) => (
                <Card key={teaching.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📖</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {teaching.title}
                      </h3>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {teaching.description}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Miracles */}
          {activeTab === 'miracles' && (
            <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {jesusChristInfo.miracles.map((miracle) => (
                <Card key={miracle.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">✨</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {miracle.name}
                      </h3>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {miracle.description}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Parables */}
          {activeTab === 'parables' && (
            <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
              {jesusChristInfo.parables.map((parable) => (
                <Card key={parable.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                  <Card.Body className="p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg">📚</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {parable.name}
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {parable.description}
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

export default JesusChristPage;
