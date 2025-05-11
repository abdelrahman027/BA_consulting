import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StartForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    field: '',
    message: '',
    from:"consulting-page"
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8000/api/boost_abroad_consulting_form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('فشل في إرسال البيانات');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        country: '',
        field: '',
        message: ''
      });
    } catch (err) {
      setError(err.message || 'حدث خطأ ما، يرجى المحاولة لاحقاً');
    } finally {
      setLoading(false);
    }
  };
  console.log(formData)

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto bg-gray-900/80 backdrop-blur-lg p-6 md:p-10 rounded-2xl border border-white/10">
        {/* Left Column - Form */}
        <motion.div
          className="space-y-6"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">القسم السادس: نموذج التسجيل</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-white/80 mb-2">الاسم الكامل</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-white/80 mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="+966 55 555 5555"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/80 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="example@domain.com"
                required
              />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Study Country */}
              <div>
                <label className="block text-white/80 mb-2">
                  بلد الدراسة المرغوبة <span className="text-orange-400">(اختياري)</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="مثل: الولايات المتحدة"
                />
              </div>

              {/* Study Field */}
              <div>
                <label className="block text-white/80 mb-2">
                  التخصص الدراسي المرغوب <span className="text-orange-400">(اختياري)</span>
                </label>
                <input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="مثل: الهندسة أو الطب"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/80 mb-2">رسالة (مربع مفتوح للكتابة)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="أخبرنا عن أهدافك الدراسية..."
              ></textarea>
            </div>

            {/* Success / Error Messages */}
            {success && (
              <div className="text-green-400 text-center font-medium">✅ تم إرسال النموذج بنجاح!</div>
            )}
            {error && <div className="text-red-400 text-center font-medium">⚠️ {error}</div>}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 165, 0, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'جاري الإرسال...' : 'احجز استشارتك المجانية الآن!'}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Motivational Text */}
        <motion.div
          className="flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-sky-500/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-white text-lg md:text-xl font-medium text-center leading-relaxed">
            احصل على استشارة مجانية مع فريقنا المتخصص الذي سيرافقك خطوة بخطوة حتى تصل إلى بوابة المستقبل الذي تحلم به!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StartForm;