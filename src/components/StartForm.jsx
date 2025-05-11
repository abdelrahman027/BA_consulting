import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const StartForm = () => {
  return (
    <div>

                {/* Form Section */}
        <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
            
            <form className="space-y-4">
                {/* Full Name */}
                <div>
                <label className="block text-white/80 mb-2">الاسم الكامل</label>
                <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="أدخل اسمك الكامل"
                />
                </div>

                {/* Phone Number */}
                <div>
                <label className="block text-white/80 mb-2">رقم الهاتف</label>
                <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="+966 55 555 5555"
                />
                </div>

                {/* Email */}
                <div>
                <label className="block text-white/80 mb-2">البريد الإلكتروني</label>
                <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="example@domain.com"
                />
                </div>

                {/* Optional Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Study Country */}
                <div>
                    <label className="block text-white/80 mb-2">بلد الدراسة المرغوبة <span className="text-orange-400">(اختياري)</span></label>
                    <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="مثل: الولايات المتحدة"
                    />
                </div>

                {/* Study Field */}
                <div>
                    <label className="block text-white/80 mb-2">التخصص الدراسي المرغوب <span className="text-orange-400">(اختياري)</span></label>
                    <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="مثل: الهندسة أو الطب"
                    />
                </div>
                </div>

                {/* Message */}
                <div>
                <label className="block text-white/80 mb-2">رسالة (مربع مفتوح للكتابة)</label>
                <textarea 
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="أخبرنا عن أهدافك الدراسية..."
                ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button 
                type="submit"
                className="mt-4 w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 165, 0, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                >
                احجز استشارتك المجانية الآن!
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
    </div>
  )
}

export default StartForm