import React from 'react'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='homeDiv w-screen h-screen relative'>
        <div className='HomeGrad opacity-70 h-full w-full absolute top-0 left-0'></div>
        <div className="container relative pt-20">
          <div className='flex items-center justify-center gap-12'>
            <div className="">
                <h1 className='text-white text-4xl font-bold'>حلم السفر أصبح سهلاَ</h1>
            </div>
            <img src="logoBA.png" alt="logo" className='w-40' />
          </div>
          <div className='text-white text-2xl text-center pt-32 font-semibold'>
            <h2 className='pb-12'>احصل على استشارتك المجانية الآن مع فريقنا المتخصص! 
            بخبرة تفوق 15 عامًا في مجال استشارات الدراسة بالخارج، نحن هنا لمساعدتك في تحقيق حلمك.</h2>
            <button className='px-6 py-4 text-xl rounded-full bg-orange-500 hover:bg-orange-600'>
              أبدأ الأن
            </button>
          </div>
          <div className='flex items-center justify-start gap-6 pt-32'>
            <div className='text-white text-lg '>
              <div>انضم الي اكثر من 3000 طالب</div>
              <div className='font-bold'>برامج جديده كل عام</div>
            </div>
            <div className="images flex items-center justify-center">
              <div className='rounded-full -ml-3'>
                <img src="h1.jpg" alt="h1" className='w-16 h-16 rounded-full bg-cover' />
              </div>
              <div className='rounded-full -ml-3'>
                <img src="h2.png" alt="h1" className='w-16 h-16 rounded-full bg-cover' />
              </div>
              <div className='rounded-full -ml-3'>
                <img src="h3.png" alt="h1" className='w-16 h-16 rounded-full bg-cover' />
              </div>
              <div className='rounded-full -ml-3'>
                <img src="h4.jpg" alt="h1" className='w-16 h-16 rounded-full bg-cover' />
              </div>
              <div className='rounded-full'>
                <img src="h5.jpg" alt="h1" className='w-16 h-16 rounded-full bg-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        section2
      </div>
    </div>
  )
}

export default App