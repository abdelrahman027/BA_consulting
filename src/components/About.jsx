import React from 'react'

const About = () => {
  return (
    <div className='container p-8 md:pt-12'>
        <div className='flex items-center justify-start gap-2'>
        <button className='md:px-6 m:py-4  px-4 py-2 text-base md:text-xl rounded-full bg-orange-500 hover:bg-orange-600 text-white'>
            أعرف المذيد عنا
            </button>
            <h2 className='text-base md:text-xl font-bold'>
                Boost Abroad
            {/* <span className='text-sky-500'> افضل وجهاتنا  </span> */}
            </h2>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 md:justify-between pt-4 md:pt-8 '>
            <div className='max-w-[600px] text-base md:text-xl lg:text-2xl'>حلم السفر لم يعد مجرد فكرة تراودك، بل هو الخطوة الأولى نحو بناء مستقبل تستحقه. ومع التخطيط للمستقبل بطريقة صحيحة ومدروسة، تتحول كل لحظة انتظار إلى خطوة أقرب نحو النجاح. نحن هنا لنثبت لك أن حلم اليوم هو واقع الغد إذا امتلكت الشجاعة لتبدأ. لا تدع الفرص تمر أمامك، فبوابتك نحو الدراسة العالمية أصبحت أقرب مما تظن. انطلق بثقة، ودعنا نساعدك في تحويل حلمك إلى إنجاز حقيقي يغير حياتك.</div>
            <div className='md:overflow-hidden rounded-lg'>
                <iframe className=' text-center w-[350px] md:w-[400px] lg:w-[600px] aspect-video rounded-lg' src="https://www.youtube.com/embed/BHRa5T8kmBo?si=aCaYGTai8Yd-xzS3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default About