import React, { useState } from 'react';
import { Button, Card, PageLayout } from '../components/ui';
import SwiperSlider from '../components/SwiperSlider';
import { sundaySchoolSchedule, ageGroups } from '../data/demoData';

const SundaySchool = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

  // Prepare Sunday School images for slider
  const sundaySchoolImages = [
    {
      src: '/images/sundaySchool/20240901_100057.jpg',
      alt: 'درس مدرسة الأحد',
      title: 'درس العقيدة الأرثوذكسية',
      description: 'تعلم العقيدة الأرثوذكسية بطريقة مبسطة وممتعة'
    },
    {
      src: '/images/sundaySchool/20240915_114210.jpg',
      alt: 'أطفال في مدرسة الأحد',
      title: 'أطفال مدرسة الأحد',
      description: 'أطفالنا يتعلمون القيم المسيحية الأرثوذكسية'
    },
    {
      src: '/images/sundaySchool/20240915_115335.jpg',
      alt: 'نشاط مدرسة الأحد',
      title: 'نشاطات مدرسة الأحد',
      description: 'أنشطة متنوعة في مدرسة الأحد'
    },
    {
      src: '/images/sundaySchool/20241020_113823.jpg',
      alt: 'درس مدرسة الأحد',
      title: 'درس في مدرسة الأحد',
      description: 'دروس العقيدة الأرثوذكسية'
    }
  ];

  const filteredSchedule = selectedAgeGroup === 'all' 
    ? sundaySchoolSchedule 
    : sundaySchoolSchedule.filter(item => item.ageGroup === selectedAgeGroup);

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
                <span className="text-6xl">📚</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg text-display">
              مدرسة الأحد
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-white/90 font-medium">
              تعلم العقيدة الأرثوذكسية بطريقة مبسطة وممتعة
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              عن مدرسة الأحد
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  رؤيتنا التعليمية
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  مدرسة الأحد في كنيسة أبو سنان الأرثوذكسية تهدف إلى تعليم الأطفال والشباب 
                  العقيدة الأرثوذكسية بطريقة مبسطة وممتعة، مع التركيز على بناء شخصية مسيحية 
                  قوية ومتزنة.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  نحن نؤمن بأن التعليم الديني الصحيح هو أساس بناء جيل واعٍ ومتعلق بالكنيسة.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">📖</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              الفئات العمرية
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group) => (
              <Card key={group.id} variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{group.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  {group.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {group.ageRange}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {group.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              الجدول الأسبوعي
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedAgeGroup === 'all' ? 'primary' : 'outline'}
              onClick={() => setSelectedAgeGroup('all')}
              className="px-6 py-3"
            >
              جميع الفئات
            </Button>
            {ageGroups.map((group) => (
              <Button
                key={group.id}
                variant={selectedAgeGroup === group.id ? 'primary' : 'outline'}
                onClick={() => setSelectedAgeGroup(group.id)}
                className="px-6 py-3"
              >
                {group.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredSchedule.map((item) => (
              <Card key={item.id} variant="interactive" className="overflow-hidden">
                <Card.Body className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                          {item.title}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                          {item.ageGroup}
                        </p>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    <span className="mr-2">📍</span>
                    <span>{item.location}</span>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              معرض مدرسة الأحد
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <SwiperSlider
              images={sundaySchoolImages}
              autoplay={true}
              interval={5000}
              effect="slide"
              rtl={true}
            />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-display">
              التسجيل في مدرسة الأحد
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            <p className="text-xl text-white/90 mt-6 max-w-3xl mx-auto">
              سجل طفلك في مدرسة الأحد لتعلم العقيدة الأرثوذكسية بطريقة ممتعة ومفيدة
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Registration Instructions */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Card.Body className="p-8">
                  <h3 className="text-2xl font-bold mb-6">تعليمات التسجيل</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">1</span>
                      <p className="text-white/90">قم بملء استمارة التسجيل المرفقة</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">2</span>
                      <p className="text-white/90">أرفق صورة شخصية للطفل</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">3</span>
                      <p className="text-white/90">قدم الطلب في الكنيسة أو عبر الهاتف</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 text-sm font-bold">4</span>
                      <p className="text-white/90">ستتلقى تأكيد التسجيل خلال 48 ساعة</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Download Form */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <Card.Body className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">استمارة التسجيل</h3>
                  <p className="text-white/90 mb-6">
                    حمل استمارة التسجيل واملأها ثم قدمها في الكنيسة
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600 w-full"
                    onClick={() => {
                      // Create a simple PDF download
                      const link = document.createElement('a');
                      link.href = '#';
                      link.download = 'استمارة_التسجيل_مدرسة_الأحد.pdf';
                      link.click();
                    }}
                  >
                    حمل الاستمارة
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SundaySchool;