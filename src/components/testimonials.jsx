import react from 'react';
import { images } from '../constant/images';
import { motion } from 'framer-motion';


export const Testimonials = () => {
    
    return (
        <div className='bg-white py-32' id='testimonials'>

            <div id="default-carousel" className="relative w-full h-96 pt-10 " data-carousel="slide">

                <div class="relative h-96 overflow-hidden  rounded-lg md:h-96">
                    <div className='flex items-center justify-center flex-col gap-4 '>
                        <h1 className='text-xl text-yellow-500 font-bold'>TESTIMONIALS</h1>
                        <h2 className=' text-3xl font-[Satisfy] font-bold'>What Are They <span className='text-red-500'>Saying About Us</span></h2>
                    </div>
                    <div class="hidden duration-700 ease-in-out flex  p-24 " data-carousel-item>
                        <div class="w-2/3">
                            <h1 class="font-bold text-3xl">John Doe</h1>
                            <p class="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                            <p class="text-2xl text-start">
                                "This service exceeded my expectations! The attention to detail and professionalism were outstanding. Highly recommend to anyone looking for quality."
                            </p>
                        </div>
                        <div class="w-1/3 justify-end">
                            <img src={images.testimonials1} alt="John Doe" className="w-34 h-44 rounded-full border-4 border-gray-300 shadow-lg" />
                        </div>
                    </div>

                    <div class="hidden duration-700 ease-in-out flex  p-24 " data-carousel-item>
                        <div class="w-2/3">
                            <h1 class="font-bold text-3xl">Emily Carter</h1>
                            <p class="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                            <p class="text-2xl text-start">"Absolutely phenomenal! The team went above and beyond to deliver results. I couldn’t be happier with the experience."</p>
                        </div>
                        <div className='w-1/3 justify-end '>
                            <img src={images.testimonials2} className="w-34 h-44 rounded-full border-4 border-gray-300 shadow-lg" alt="" />
                        </div>

                    </div>

                    <div class="hidden duration-700 ease-in-out flex p-24 " data-carousel-item>
                        <div class='w-2/3'>
                            <h1 class="font-bold text-3xl">Michael Brown</h1>
                            <p class="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                            <p class="text-2xl text-start">"Top-notch service with a personal touch. They really care about customer satisfaction and it shows in their work."</p>
                        </div>
                        <div class='w-1/3 justify-end'>
                            <img src={images.testimonials3} className="w-34 h-44 rounded-full border-4 border-gray-300 shadow-lg" alt="" />
                        </div>

                    </div>

                    <div class="hidden duration-700 ease-in-out flex p-24 " data-carousel-item>
                        <div class='w-2/3'>
                            <h1 class="font-bold text-3xl">Sarah Wilson</h1>
                            <p class="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                            <p class="text-2xl text-start">"From start to finish, the process was seamless. I was impressed by the professionalism and the results speak for themselves!"</p>
                        </div>
                        <div class='w-1/3 justify-end '>
                            <img src={images.testimonials4} className="w-34 h-44 rounded-full border-4 border-gray-300 shadow-lg" alt="" />
                        </div>

                    </div>

                </div>

                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                </div>

            </div>

        </div>
    );
}