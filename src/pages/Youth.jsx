import React, { useState } from 'react';
import { Button, Card, PageLayout } from '../components/ui';
import SwiperSlider from '../components/SwiperSlider';
import { youthActivities } from '../data/demoData';

const Youth = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', age: '', phone: '', notes: '' });
    }, 2000);
  };

  // Prepare youth images for slider
  const youthImages = [
    {
      src: '/images/youth/430910086_423254923398985_8992598950818086049_n.jpg',
      alt: 'لقاء الشبيبة',
      title: 'لقاء الشبيبة الأرثوذكسية',
      description: 'لقاء أسبوعي للشبيبة كل يوم جمعة الساعة 17:00'
    },
    {
      src: '/images/youth/448393990_781101900671444_1591261157996533294_n.jpg',
      alt: 'نشاط الشبيبة',
      title: 'أنشطة الشبيبة',
      description: 'أنشطة متنوعة للشبيبة الأرثوذكسية'
    },
    {
      src: '/images/youth/WhatsApp Image 2024-10-23 at 22.29.08_62d1d797.jpg',
      alt: 'لقاء حديث',
      title: 'اللقاءات الحديثة',
      description: 'أحدث لقاءات الشبيبة الأرثوذكسية'
    },
    {
      src: '/images/youth/488455454_17945822231969345_3810780484377850041_n.jpg',
      alt: 'نشاط روحي للشبيبة',
      title: 'النشاط الروحي',
      description: 'أنشطة روحية وتربوية للشبيبة الأرثوذكسية'
    },
    {
      src: '/images/youth/490284024_1734419097486380_6639777031819146_n.jpg',
      alt: 'لقاء الشباب',
      title: 'لقاءات الشباب',
      description: 'لقاءات منتظمة للشباب الأرثوذكسي'
    },
    {
      src: '/images/youth/491212489_17946788033969345_6496394736311657187_n.jpg',
      alt: 'نشاط جماعي',
      title: 'الأنشطة الجماعية',
      description: 'أنشطة جماعية تعزز روح الجماعة'
    },
    {
      src: '/images/youth/491417733_17947012280969345_1996375411207247890_n.jpg',
      alt: 'برنامج الشبيبة',
      title: 'برامج الشبيبة',
      description: 'برامج متنوعة للشبيبة الأرثوذكسية'
    },
    {
      src: '/images/youth/491438441_1176139530487274_2061728995521215625_n.jpg',
      alt: 'نشاط تعليمي',
      title: 'الأنشطة التعليمية',
      description: 'أنشطة تعليمية وتربوية للشبيبة'
    },
    {
      src: '/images/youth/548007847_17963392253969345_5049766517398923943_n.jpg',
      alt: 'لقاء روحي',
      title: 'اللقاءات الروحية',
      description: 'لقاءات روحية عميقة للشبيبة'
    },
    {
      src: '/images/youth/547820327_17963392262969345_3554283172201839140_n.jpg',
      alt: 'نشاط اجتماعي',
      title: 'الأنشطة الاجتماعية',
      description: 'أنشطة اجتماعية تخدم المجتمع'
    },
    {
      src: '/images/youth/546635924_17963392235969345_6709135976801637941_n.jpg',
      alt: 'برنامج تربوي',
      title: 'البرامج التربوية',
      description: 'برامج تربوية للشبيبة الأرثوذكسية'
    },
    {
      src: '/images/youth/500468101_17950838285969345_5797607017481219214_n.jpg',
      alt: 'نشاط تطوعي',
      title: 'الأنشطة التطوعية',
      description: 'أنشطة تطوعية لخدمة المجتمع'
    },
    {
      src: '/images/youth/548130907_17963392205969345_283199740952138513_n.jpg',
      alt: 'لقاء شبابي',
      title: 'اللقاءات الشبابية',
      description: 'لقاءات شبابية منتظمة ومثمرة'
    },
    {
      src: '/images/youth/545506290_17963392196969345_2242260101363969782_n.jpg',
      alt: 'نشاط ثقافي',
      title: 'الأنشطة الثقافية',
      description: 'أنشطة ثقافية وتراثية للشبيبة'
    }
  ];

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
                <span className="text-6xl">👥</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg text-display">
              الشبيبة الأرثوذكسية
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-white/90 font-medium">
              انضم إلى شبيبة كنيسة أبو سنان الأرثوذكسية
            </p>
          </div>
        </div>
      </section>

      {/* About Youth Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              عن الشبيبة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  رؤيتنا ورسالتنا
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  شبيبة كنيسة أبو سنان الأرثوذكسية هي مجتمع روحي يهدف إلى تعميق الإيمان الأرثوذكسي 
                  وبناء جيل واعٍ ومتعلق بالكنيسة. نحن نؤمن بأن الشباب هم مستقبل الكنيسة وقلبها النابض.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  من خلال أنشطتنا المتنوعة، نسعى لتعزيز القيم المسيحية الأرثوذكسية وبناء علاقات 
                  أخوية قوية بين أعضائنا.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl flex items-center justify-center">
                  <span className="text-8xl">⛪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              أهدافنا
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                تعميق الإيمان
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                دراسة الكتاب المقدس والعقيدة الأرثوذكسية لتعميق الإيمان المسيحي
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                بناء المجتمع
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                تعزيز العلاقات الأخوية وبناء مجتمع مسيحي قوي ومترابط
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                الخدمة المجتمعية
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                المشاركة في الخدمة المجتمعية ومساعدة المحتاجين
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              أنشطتنا
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {youthActivities.map((activity) => (
              <Card key={activity.id} variant="interactive" className="overflow-hidden">
                <Card.Body className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">{activity.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {activity.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {activity.schedule}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {activity.description}
                  </p>
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
              معرض الشبيبة
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <SwiperSlider
              images={youthImages}
              autoplay={true}
              interval={5000}
              effect="slide"
              rtl={true}
            />
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className='section-padding bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800'>
        <div className='container-app'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display'>
              تابعونا على إنستغرام
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full'></div>
            <p className='text-lg text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto'>
              تابعوا آخر أخبار وأنشطة الشبيبة الأرثوذكسية في أبو سنان
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            <Card className="bg-white dark:bg-neutral-800 shadow-xl">
              <Card.Body className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl">📷</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    @orthodox_youth_abusinan
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    صفحة الشبيبة الأرثوذكسية الرسمية على إنستغرام
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-600">
                  <iframe
                    src="https://www.instagram.com/orthodox_youth_abusinan/embed"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    className="rounded-lg"
                    title="Instagram Feed - Orthodox Youth Abu Snan"
                  ></iframe>
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    as="a"
                    href="https://www.instagram.com/orthodox_youth_abusinan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    تابعونا على إنستغرام
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-display">
              انضم إلينا
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            <p className="text-xl text-white/90 mt-6 max-w-3xl mx-auto">
              انضم إلى شبيبة كنيسة أبو سنان الأرثوذكسية وكن جزءاً من مجتمعنا الروحي
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <Card.Body className="p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">تم التسجيل بنجاح!</h3>
                    <p className="text-white/90">
                      شكراً لك! سنتواصل معك قريباً
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          الاسم الكامل
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          العمر
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="أدخل عمرك"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        ملاحظات إضافية
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        placeholder="أي ملاحظات أو أسئلة إضافية..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="ghost"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full border border-white/50 text-white hover:bg-white/20 hover:text-white text-lg py-4 backdrop-blur-sm shadow-lg"
                    >
                      {isSubmitting ? 'جاري التسجيل...' : 'انضم الآن'}
                    </Button>
                  </form>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youth;