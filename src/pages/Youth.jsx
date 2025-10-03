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
      alt: 'اجتماع الشبيبة',
      title: 'اجتماع الشبيبة',
      description: 'اجتماعات الشبيبة الأرثوذكسية'
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
                      variant="outline"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full border-white text-white hover:bg-white hover:text-primary-600 text-lg py-4"
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