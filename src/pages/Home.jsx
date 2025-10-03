import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button, Card, PageLayout } from '../components/ui';
import SwiperSlider from '../components/SwiperSlider';
import { prayerTimes, upcomingEvents, galleryImages } from '../data/demoData';
import { saintGeorgeInfo, orthodoxFeasts, jesusChristInfo, virginMaryInfo, orthodoxPrayers, orthodoxSaints } from '../data/orthodoxData';

const Home = () => {
  const { t } = useLanguage();

  // Prepare slider images
  const sliderImages = galleryImages.slice(0, 5).map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption,
    description: img.caption,
  }));

  return (
    <div className='min-h-screen'>
      
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 text-white overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent'></div>
        <div className='relative container-app section-padding'>
          <div className='max-w-5xl mx-auto text-center'>
            <div className='mb-8'>
              <div className='w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-2 border-white/20'>
                <img
                  src='/images/orthodox-cross.png'
                  alt='Orthodox Cross'
                  className='w-20 h-20 object-contain'
                />
              </div>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg text-display'>
              كنيسة القديس جاورجيوس للروم الأرثوذكس
            </h1>
            <p className='text-xl md:text-3xl mb-12 text-white/90 font-medium'>
              أبو سنان، الجليل - بيت يجمع المؤمنين للصلاة والعبادة
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <Button
                as={Link}
                to='/contact'
                variant='secondary'
                size='lg'
                className='text-lg px-10 py-5'
              >
                {t('common.learnMore')}
              </Button>
              <Button
                as={Link}
                to='/gallery'
                variant='outline'
                size='lg'
                className='text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary-600'
              >
                {t('nav.gallery')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              معرض الكنيسة
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='max-w-6xl mx-auto'>
            <SwiperSlider
              images={sliderImages}
              autoplay={true}
              interval={4000}
              effect="fade"
            />
          </div>
        </div>
      </section>

      {/* About Church Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              عن الكنيسة
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⛪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    كنيسة القديس جاورجيوس للروم الأرثوذكس
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    قرية أبو سنان، الجليل
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p className="mb-6">
                    تُعد من أبرز المعالم الروحية في الجليل، وهي بيت يجمع المؤمنين للصلاة، العبادة، والاحتفال بأهم المناسبات الدينية. الكنيسة تتبع بطريركية الروم الأرثوذكس في القدس، وتخدم أبناء الرعية عبر إقامة القداديس الأسبوعية، الأسرار المقدسة مثل المعمودية والزواج، إضافة إلى النشاطات التعليمية والروحية للأطفال من خلال مدرسة الأحد، وبرامج خاصة للشبيبة التي تعزز روح المشاركة والمحبة.
                  </p>
                  
                  <p className="mb-6">
                    الكنيسة ليست مجرد مكان للعبادة، بل هي أيضًا مركز اجتماعي وثقافي يحتضن العائلات ويقوي أواصر المحبة والوحدة بين أبناء القرية. بعمارتها التقليدية المزينة بالأيقونات واللوحات الجدارية، تحمل الكنيسة إرثًا تاريخيًا وروحيًا عريقًا يربط الماضي بالحاضر، وتبقى شاهدًا حيًا على الإيمان الأرثوذكسي العميق المتجذر في هذه الأرض المقدسة.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              {t('home.prayerTimes.title')}
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {Object.entries(prayerTimes).map(([prayer, time]) => (
              <Card
                key={prayer}
                variant='elevated'
                className='text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <img
                    src='/images/orthodox-cross.png'
                    alt='Orthodox Cross'
                    className='w-10 h-10 object-contain'
                  />
                </div>
                <h3 className='text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3'>
                  {t(`home.prayerTimes.${prayer}`)}
                </h3>
                <p className='text-lg font-semibold text-primary-600 dark:text-primary-400'>
                  {time}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              {t('home.upcomingEvents.title')}
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {upcomingEvents.slice(0, 3).map(event => (
                <Card
                  key={event.id}
                  variant='interactive'
                  className='overflow-hidden border-2 border-primary-200 dark:border-primary-800'
                >
                  <Card.Body className='p-8'>
                    <div className='flex items-center justify-between mb-6'>
                      <span className='bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className='text-primary-600 dark:text-primary-400 font-bold text-lg'>
                        {event.time}
                      </span>
                    </div>
                    <Card.Title className='text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3'>
                      {event.title}
                    </Card.Title>
                    <Card.Description className='text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed'>
                      {event.description}
                    </Card.Description>
                    <div className='flex items-center text-sm text-primary-600 dark:text-primary-400 font-semibold'>
                      <span className='mr-2 text-secondary-500'>📍</span>
                      <span>
                        {event.location}
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <p className='text-neutral-600 dark:text-neutral-400 text-lg'>
                {t('home.upcomingEvents.noEvents')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className='section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 text-display'>
              روابط سريعة
            </h2>
            <div className='w-24 h-1 bg-white/30 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card
              variant='interactive'
              className='bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
            >
              <Card.Body className='p-8 text-center'>
                <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>👥</span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  الشبيبة
                </h3>
                <p className='text-white/90 mb-6'>
                  انضم إلى شبيبة الكنيسة الأرثوذكسية
                </p>
                <Button
                  as={Link}
                  to='/youth'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-primary-600'
                >
                  انضم الآن
                </Button>
              </Card.Body>
            </Card>

            <Card
              variant='interactive'
              className='bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
            >
              <Card.Body className='p-8 text-center'>
                <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>📚</span>
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  مدرسة الأحد
                </h3>
                <p className='text-white/90 mb-6'>
                  تعلم العقيدة الأرثوذكسية في مدرسة الأحد
                </p>
                <Button
                  as={Link}
                  to='/sunday-school'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-primary-600'
                >
                  تعلم أكثر
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Saint George Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              القديس جاورجيوس
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{saintGeorgeInfo.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {saintGeorgeInfo.name}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {saintGeorgeInfo.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    {saintGeorgeInfo.feastDay}
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p className="mb-4 text-sm">
                    {saintGeorgeInfo.description}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    شفيع:
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
                    {saintGeorgeInfo.patronOf}
                  </p>
                  <Button
                    as={Link}
                    to="/saint-george"
                    variant="primary"
                    className="w-full"
                  >
                    تعلم أكثر عن القديس جاورجيوس
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
                  معجزات القديس جاورجيوس
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {saintGeorgeInfo.miracles.map((miracle, index) => (
                    <div key={index} className="text-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg">✨</span>
                      </div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {miracle}
                      </h4>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Orthodox Feasts Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              الأعياد الأرثوذكسية
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {orthodoxFeasts.majorFeasts.slice(0, 6).map((feast) => (
              <Card key={feast.id} className="bg-white dark:bg-neutral-800 shadow-xl">
                <Card.Body className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎊</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
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
                      {feast.traditions.slice(0, 2).map((tradition, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {tradition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <Button
                      as={Link}
                      to="/orthodox-feasts"
                      variant="outline"
                      className="w-full text-xs"
                    >
                      جميع الأعياد الأرثوذكسية
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jesus Christ Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              يسوع المسيح
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✝️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {jesusChristInfo.basicInfo.name}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {jesusChristInfo.basicInfo.titles.slice(0, 3).join(' • ')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      مكان الميلاد:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {jesusChristInfo.basicInfo.birth}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      بداية الخدمة:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {jesusChristInfo.basicInfo.ministry}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      القيامة:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {jesusChristInfo.basicInfo.resurrection}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      as={Link}
                      to="/jesus-christ"
                      variant="primary"
                      className="w-full"
                    >
                      تعلم أكثر عن يسوع المسيح
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
                  المعجزات
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {jesusChristInfo.miracles.slice(0, 4).map((miracle) => (
                    <div key={miracle.id} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-sm">✨</span>
                        </div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {miracle.name}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {miracle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Virgin Mary Section */}
      <section className='section-padding bg-neutral-50 dark:bg-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              العذراء مريم
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👑</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {virginMaryInfo.basicInfo.name}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                    {virginMaryInfo.basicInfo.titles.slice(0, 3).join(' • ')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      الوالدان:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {virginMaryInfo.basicInfo.parents}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      الزوج:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {virginMaryInfo.basicInfo.spouse}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      الابن:
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {virginMaryInfo.basicInfo.son}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      as={Link}
                      to="/virgin-mary"
                      variant="primary"
                      className="w-full"
                    >
                      تعلم أكثر عن العذراء مريم
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
                  الأعياد الرئيسية
                </h3>
                <div className="space-y-4">
                  {virginMaryInfo.majorFeasts.slice(0, 4).map((feast) => (
                    <div key={feast.id} className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          {feast.name}
                        </h4>
                        <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                          {feast.date}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {feast.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/* Orthodox Prayers Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              الصلوات الأرثوذكسية
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

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
                  
                  <div className="mt-4">
                    <Button
                      as={Link}
                      to="/orthodox-prayers"
                      variant="outline"
                      className="w-full text-xs"
                    >
                      جميع الصلوات الأرثوذكسية
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Section */}
      <section className='section-padding bg-white dark:bg-neutral-900'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              تابعونا على فيسبوك
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <div className='bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden'>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fabusnanchurch%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
