import React from 'react';
import { motion } from 'framer-motion';

const Destinations = () => {
  const destinations = [
    { name: 'كندا', region: 'شمال امريكا', image: 'canada.jpg' },
    { name: 'الولايات المتحده', region: 'شمال امريكا', image: 'usa.jpg' },
    { name: 'المملكه المتحده', region: 'أوروبا', image: 'uk.jpg' }
  ];

  return (
    <div className='container p-8 md:pt-12'>
      {/* Title Section with Animation */}
      <motion.div 
        className='flex items-center justify-start gap-2 mb-8'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.button 
          className='md:px-6 px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300'
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 165, 0, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <a target='_blank' href="https://boost-abroad.com/">أستكشف وجهاتنا</a>
        </motion.button>
        <motion.h2 
          className='text-base md:text-xl font-bold'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ابدأ رحلتك لأحدي 
          <motion.span 
            className='text-sky-500 mx-1'
            whileHover={{ 
              scale: 1.1,
              color: "#0ea5e9"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            افضل وجهاتنا  
          </motion.span>
        </motion.h2>
      </motion.div>

      {/* Destination Cards Grid */}
      <motion.div 
        className="flex flex-wrap items-center justify-center lg:justify-between gap-8 pt-8 md:pt-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className='w-[400px] h-52 rounded-lg overflow-hidden relative cursor-pointer group'
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className='HomeGrad opacity-40 h-full w-full absolute top-0 left-0'
              initial={{ opacity: 0.4 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            <motion.img 
              src={dest.image} 
              alt={dest.name}
              className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
            />
            
            <motion.div 
              className='absolute bottom-7 right-7 z-20 text-white'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <motion.p 
                className='text-2xl font-bold'
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {dest.name}
              </motion.p>
              <p className='text-lg font-bold'>{dest.region}</p>
            </motion.div>

            {/* Hover overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ 
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)"
              }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Destinations;