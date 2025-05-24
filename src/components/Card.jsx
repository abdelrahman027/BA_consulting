import React from 'react'
import { motion } from "framer-motion"

const Card = ({dest,index}) => {
  return (
    <motion.div
    key={index}
    // className="w-[400px] h-52 rounded-lg overflow-hidden relative cursor-pointer group"
    className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex items-center justify-center"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 12,
        },
      },
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className="HomeGrad opacity-40 h-full w-full absolute top-0 left-0"
      initial={{ opacity: 0.4 }}
      whileHover={{ opacity: 0.6 }}
      transition={{ duration: 0.3 }}
    ></motion.div>

    <motion.img
      src={dest.image}
      alt={dest.name}
      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
    />
    <motion.img
      src={dest.icon}
      alt={dest.name}
      className="absolute top-2 left-2 w-16 h-16 rounded-full object-cover shadow-lg"
    />

    <motion.div
      className="absolute bottom-7 right-7 z-20 text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <motion.p
        className="text-2xl font-bold"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {dest.name}
      </motion.p>
      <p className="text-lg font-bold">{dest.region}</p>
    </motion.div>

    {/* Hover overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      whileHover={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
      }}
    ></motion.div>
  </motion.div>
  )
}

export default Card