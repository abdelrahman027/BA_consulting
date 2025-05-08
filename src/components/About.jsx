import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  return (
    <div className='container p-8 md:pt-12'>
      {/* Header Section */}
      <motion.div 
        className='flex items-center justify-start gap-2 mb-8'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.button 
          className='md:px-6 px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300'
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 165, 0, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        ><a href="
          https://boost-abroad.com/about-us/">
          أعرف المزيد عنا
          </a>
        </motion.button>
        <motion.h2 
          className='text-base md:text-xl font-bold'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.span 
            className='text-sky-500 mx-1'
            whileHover={{ scale: 1.1, color: "#0ea5e9" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Boost Abroad  
          </motion.span>
        </motion.h2>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className='flex flex-wrap items-center justify-center gap-4 md:justify-between pt-4 md:pt-8'
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3 }
          }
        }}
      >
        {/* Text Content */}
        <motion.p 
          className='max-w-[600px] text-base md:text-xl lg:text-2xl'
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { type: "spring", stiffness: 80, damping: 12 }
            }
          }}
        >
          حلم السفر لم يعد مجرد فكرة تراودك، بل هو الخطوة الأولى نحو بناء مستقبل تستحقه. ومع التخطيط للمستقبل بطريقة صحيحة ومدروسة، تتحول كل لحظة انتظار إلى خطوة أقرب نحو النجاح. نحن هنا لنثبت لك أن حلم اليوم هو واقع الغد إذا امتلكت الشجاعة لتبدأ. لا تدع الفرص تمر أمامك، فبوابتك نحو الدراسة العالمية أصبحت أقرب مما تظن. انطلق بثقة، ودعنا نساعدك في تحويل حلمك إلى إنجاز حقيقي يغير حياتك.

        </motion.p>

        {/* Video Section (Animated on View) */}
        <motion.div 
          ref={videoRef}
          className='md:overflow-hidden rounded-lg'
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(40px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.iframe 
            className='w-[350px] md:w-[400px] lg:w-[600px] aspect-video rounded-lg shadow-lg'
            src="https://www.youtube.com/embed/BHRa5T8kmBo?si=aCaYGTai8Yd-xzS3" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            initial={{ borderRadius: 8 }}
            whileHover={{ 
              borderRadius: 16,
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
      
      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {[
          { title: "15+", desc: "سنة خبرة في مجال الاستشارات التعليمية" },
          { title: "3000+", desc: "طالب ساعدناهم في تحقيق أحلامهم" },
          { title: "20+", desc: "وجهة دراسية حول العالم" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 12 }
              }
            }}
            whileHover={{ 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.p className="text-3xl font-bold text-orange-500">{stat.title}</motion.p>
            <p className="text-white mt-2">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;