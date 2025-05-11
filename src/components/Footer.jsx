// Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: '#' }
  ];

  return (
    <footer className="relative w-full footer bg-cover md:bg-contain bg-gray-900 text-white">
      {/* Match Hero Gradient */}
      <motion.div 
        className="HomeGrad opacity-70 h-full w-full absolute top-0 left-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Slogan Section - Animate While In View */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
            ابدأ اليوم... مستقبلك ينتظرك!
          </h3>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين حققوا أحلامهم بالدراسة في الخارج مع استشاريين خبراء
          </p>
        </motion.div>

        {/* Social Media Icons - Staggered Animation */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xl hover:text-orange-500 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 12
                  }
                }
              }}
              whileHover={{ 
                scale: 1.2,
                backgroundColor: "white",
                color: "#ea580c"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright - Delayed Animation */}
        <motion.div 
          className="text-center text-gray-400 text-sm mt-12 pt-6 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()} Boost Abroad. جميع الحقوق محفوظة.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;