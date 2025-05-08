import React from 'react'

const Destinations = () => {
  return (
    <div className='container p-8 md:pt-12'>
    <div className='flex items-center justify-start gap-2'>
      <button className='md:px-6 m:py-4  px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white'>
          أستكشف وجهاتنا
        </button>
        <h2 className='text-base md:text-xl font-bold'>
             ابدأ رحلتك لأحدي 
          <span className='text-sky-500'> افضل وجهاتنا  </span>
        </h2>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-8 pt-8 md:pt-12">
        <div className='w-[400px] h-52 rounded-lg overflow-hidden relative'>
          <div className='HomeGrad opacity-40 h-full w-full absolute top-0 left-0'></div>
          <div className=' absolute bottom-7 right-7 z-20 text-white'>
            <p className='text-2xl font-bold'>كندا</p>
            <p className='text-lg font-bold'>شمال امريكا</p>
          </div>
          
          <img src="canada.jpg" alt="canada" className='object-cover w-full h-full' />
        </div>
        <div className='w-[400px] h-52 rounded-lg overflow-hidden relative'>
          <div className='HomeGrad opacity-40 h-full w-full absolute top-0 left-0'></div>
          <img src="usa.jpg" alt="canada" className='object-cover w-full h-full' />
          <div className=' absolute bottom-7 right-7 z-20 text-white'>
            <p className='text-2xl font-bold'>الولايات المتحده</p>
            <p className='text-lg font-bold'>شمال امريكا</p>
          </div>
        </div>
        <div className='w-[400px] h-52 rounded-lg overflow-hidden relative'>
          <div className='HomeGrad opacity-40 h-full w-full absolute top-0 left-0'></div>
          <img src="uk.jpg" alt="canada" className='object-cover w-full h-full' />
          <div className=' absolute bottom-7 right-7 z-20 text-white'>
            <p className='text-2xl font-bold'>المملكه المتحده</p>
            <p className='text-lg font-bold'> أروبا</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Destinations