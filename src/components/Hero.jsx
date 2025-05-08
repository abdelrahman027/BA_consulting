import React from 'react'

const Hero = () => {
  return (
    <div className='homeDiv w-screen h-screen relative'>
    <div className='HomeGrad opacity-70 h-full w-full absolute top-0 left-0'></div>
    <div className="container relative pt-12 md:pt-20">
      <div className='flex items-center justify-center gap-12'>
        <div className="">
            <h1 className='text-white text-xl md:text-4xl font-bold'>حلم السفر أصبح سهلاَ</h1>
        </div>
        <img src="logoBA.png" alt="logo" className='w-32 md:w-40' />
      </div>
      <div className='text-white text-lg md:text-2xl text-center pt-20 md:pt-32 font-semibold'>
        <h2 className='pb-12'>احصل على استشارتك المجانية الآن مع فريقنا المتخصص! 
        بخبرة تفوق 15 عامًا في مجال استشارات الدراسة بالخارج، نحن هنا لمساعدتك في تحقيق حلمك.</h2>
        <button className='md:px-6 m:py-4  px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600'>
          أبدأ الأن
        </button>
      </div>
      <div className='flex items-center justify-center md:justify-start gap-6 pt-12 md:pt-32'>
        <div className='text-white text-base md:text-lg '>
          <div>انضم الي اكثر من 3000 طالب</div>
          <div className='font-bold'>برامج جديده كل عام</div>
        </div>
        <div className="images flex items-center justify-center">
          <div className='rounded-full -ml-3 required:'>
            <img src="h1.jpg" alt="h1" className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover' />
            
          </div>
          <div className='rounded-full -ml-3'>
            <img src="h2.png" alt="h1" className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover' />
          </div>
          <div className='rounded-full -ml-3'>
            <img src="h3.png" alt="h1" className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover' />
          </div>
          <div className='rounded-full -ml-3'>
            <img src="h4.jpg" alt="h1" className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover' />
          </div>
          <div className='rounded-full'>
            <img src="h5.jpg" alt="h1" className='w-8 h-8 md:w-16 md:h-16 rounded-full bg-cover object-cover' />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero