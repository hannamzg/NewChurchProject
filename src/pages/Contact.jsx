import React, { useState } from 'react';
import { Button, Card, PageLayout } from '../components/ui';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

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
                <span className="text-6xl">📞</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg text-display">
              اتصل بنا
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-white/90 font-medium">
              نحن هنا لخدمتكم ومساعدتكم في أي وقت
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-display">
              معلومات الاتصال
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                العنوان
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                كنيسة أبو سنان الأرثوذكسية<br />
                أبو سنان، الجليل، إسرائيل
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                الهاتف
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                <a href="tel:+972-4-123-4567" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +972-4-123-4567
                </a>
              </p>
            </Card>

            <Card variant="elevated" className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                البريد الإلكتروني
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                <a href="mailto:info@abusnanchurch.org" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  info@abusnanchurch.org
                </a>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-800">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                أرسل لنا رسالة
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                نحن سعداء لسماع منكم. أرسلوا لنا رسالة وسنتواصل معكم في أقرب وقت ممكن.
              </p>

              {submitStatus === 'success' ? (
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <Card.Body className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                      تم إرسال الرسالة بنجاح!
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      شكراً لك! سنتواصل معك قريباً
                    </p>
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Body className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            الاسم الكامل *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-neutral-100"
                            placeholder="أدخل اسمك الكامل"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            البريد الإلكتروني *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-neutral-100"
                            placeholder="أدخل بريدك الإلكتروني"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-neutral-100"
                          placeholder="أدخل رقم هاتفك"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                          الرسالة *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-neutral-100 resize-none"
                          placeholder="اكتب رسالتك هنا..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                موقع الكنيسة
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                يمكنكم العثور على الكنيسة في الموقع التالي:
              </p>

              <Card className="overflow-hidden">
                <div className="h-96 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">📍</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      خريطة الكنيسة
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      أبو سنان، الجليل، إسرائيل
                    </p>
                  </div>
                </div>
              </Card>

              {/* Additional Info */}
              <div className="mt-8 space-y-4">
                <Card variant="elevated" className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    أوقات الخدمة
                  </h3>
                  <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                    <div className="flex justify-between">
                      <span>القداس الإلهي:</span>
                      <span>الأحد 9:00 صباحاً</span>
                    </div>
                    <div className="flex justify-between">
                      <span>لقاء الشبيبة:</span>
                      <span>الجمعة 5:00 مساءً</span>
                    </div>
                    <div className="flex justify-between">
                      <span>مدرسة الأحد:</span>
                      <span>الأحد 10:00 صباحاً</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;