import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Card from "./Card";
import useMeasure from "react-use-measure";

const Destinations = () => {
  const destinations = [
    {
      name: "كندا",
      region: "شمال امريكا",
      image: "canada.jpg",
      icon: "https://boost-abroad.com/media/images/download.original.png",
    },
    {
      name: "الولايات المتحده",
      region: "شمال امريكا",
      image: "usa.jpg",
      icon: "https://boost-abroad.com/media/images/United_States_flag.original.png",
    },
    {
      name: "المملكه المتحده",
      region: "أوروبا",
      image: "uk.jpg",
      icon: "https://boost-abroad.com/media/images/United_Kingdom_flag.original.png",
    },
    {
      name: "أستراليا",
      region: "أستراليا",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVzdHJhbGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
      icon: "https://boost-abroad.com/media/images/Australia-flag.original.png",
    },
    {
      name: "ألمانيا",
      region: "أوروبا",
      image: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D",
      icon: "https://boost-abroad.com/media/images/Germany_flag.original.png",
    },
    {
      name: "فرنسا",
      region: "فرنسا",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww",
      icon: "https://boost-abroad.com/media/images/France_flag.original.png",
    },
    {
      name: "ماليزيا",
      region: "ماليزيا",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D",
      icon: "https://boost-abroad.com/media/images/Malaysia_flag.original.png",
    },
  ];

  const FastDuration=25
  const SlowDuration =75;


  const [duration,setDuration] = useState(FastDuration)

  const [ref, { width }] = useMeasure();
 const  xTransition = useMotionValue(0)
 useEffect(() => {
  let controls;
  let finalPosition =-width/2-8;
  controls = animate(xTransition,[0,finalPosition],{
    ease:"linear",
    duration:duration,
    repeat:Infinity,
    repeatType:"loop",
    repeatDelay:0,
  })

  return controls.stop;
 }, [width,xTransition,duration])
  return (
    <div className="container mb-36 p-8 md:pt-12">
      {/* Title Section with Animation */}
      <motion.div
        className="flex items-center justify-start gap-2 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.button
          className="md:px-6 px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(255, 165, 0, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <a target="_blank" href="https://boost-abroad.com/">
            أستكشف وجهاتنا
          </a>
        </motion.button>
        <motion.h2
          className="text-base md:text-xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ابدأ رحلتك لأحدي
          <motion.span
            className="text-sky-500 mx-1"
            whileHover={{
              scale: 1.1,
              color: "#0ea5e9",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            افضل وجهاتنا
          </motion.span>
        </motion.h2>
      </motion.div>

      {/* Destination Cards Grid */}
      <motion.div
        // className="flex flex-wrap items-center justify-center lg:justify-between gap-8 pt-8 md:pt-12"
        className="absolute left-0 flex gap-4"
        initial="hidden"
        animate="visible"
        ref={ref}
        style={{x:xTransition}}
        onHoverStart={()=>setDuration(SlowDuration)}
        onHoverEnd={()=>setDuration(FastDuration)}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[...destinations,...destinations].map((dest, index) => (
          <Card dest={dest} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Destinations;
