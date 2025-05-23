import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='homeDiv w-screen h-screen relative overflow-hidden flex flex-col items-center justify-center'>
      {/* Background Gradient */}
      <motion.div 
        className='HomeGrad opacity-70 h-full w-full absolute top-0 left-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="container relative pt-12 md:pt-20">
        {/* Logo & Title */}
        <motion.div 
          className='flex items-center justify-center gap-12'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <motion.h1 
            className='text-white animate-bounce text-xl md:text-4xl font-bold'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            حلم السفر أصبح سهلاَ
          </motion.h1>
          <motion.img 
            src="logoBA.png" 
            alt="logo" 
            className='w-32 md:w-40' 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className='text-white text-lg md:text-2xl text-center pt-20 md:pt-32 font-semibold'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2 
            className='pb-12'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            احصل على استشارتك المجانية الآن مع فريقنا المتخصص! 
            بخبرة تفوق 15 عامًا في مجال استشارات الدراسة بالخارج، نحن هنا لمساعدتك في تحقيق حلمك.
          </motion.h2>

          


          <motion.button 
            className='md:px-6 m:py-4 px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300 '
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          >
            <a href="#submitForm">
            أبدأ الأن
           </a>
            
          </motion.button>


        
        </motion.div>

        {/* Stats & Images */}
        <motion.div 
          className='flex items-center justify-center md:justify-start gap-6 pt-12 md:pt-32'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            className='text-white text-base md:text-lg'
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <div>انضم الي اكثر من 3000 طالب</div>
            <div className='font-bold'>برامج جديده كل عام</div>
          </motion.div>

          <motion.div 
            className="images flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {["h1.jpg","h2.png","h3.png","h4.jpg","h5.jpg"].map((num) => (
              <motion.div 
                key={num}
                className='rounded-full -ml-3'
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={`${num}`} 
                  alt={`h${num}`} 
                  className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover border-2 border-white' 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;