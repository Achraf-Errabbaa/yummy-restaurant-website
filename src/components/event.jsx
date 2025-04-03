import React, { useEffect, useState } from 'react';
import { images } from "../constant/images";
import 'flowbite';

export const Event = () => {
    // Define a flat list of event items
    const eventItems = [
        {
            src: images.event1,
            text: "CUSTOM PARTIES",
            price: "$120",
            description: "Tailor-made parties designed to match your unique vision. From theme selection to decor and entertainment, we handle every detail to make your dream event a reality."
        },
        {
            src: images.event2,
            text: "PRIVATE PARTIES",
            price: "$85",
            description: "An exclusive gathering for your closest friends and family. Enjoy a luxurious atmosphere with personalized service and entertainment in a private setting."
        },
        {
            src: images.event3,
            text: "BIRTHDAY PARTIES",
            price: "$150",
            description: "Celebrate your special day with an unforgettable birthday party! We provide fun themes, delicious catering, and exciting activities to make your day extra special."
        },
        {
            src: images.event4,
            text: "WEDDING PARTIES",
            price: "$90",
            description: "Make your wedding celebrations magical! From elegant receptions to lively after-parties, we create beautiful memories for you and your guests."
        },
        {
            src: images.event1,
            text: "Cultural Gala",
            price: "$110",
            description: "Experience a night of cultural richness with live performances, traditional music, and exquisite cuisine. A perfect blend of heritage and elegance."
        },
        {
            src: images.event2,
            text: "Winter Fest",
            price: "$95",
            description: "Step into a winter wonderland with festive decor, seasonal treats, and cozy entertainment. A heartwarming celebration for all ages!"
        }
    ];


    // Number of images visible at a time
    const visible = 3;
    const totalItems = eventItems.length;
    const maxSlideIndex = totalItems - visible; // e.g. 6 - 3 = 3

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Import Flowbite to initialize its carousel functionality if needed
        import('flowbite').then((module) => {
            module.default();
        });

        // Auto-rotate slides every 5 seconds
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev >= maxSlideIndex) return 0;
                return prev + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [maxSlideIndex]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div id="indicators-carousel" className="relative w-full pt-10 h-[800px] overflow-hidden">
            <div className="relative ">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * (100 / visible)}%)` }}
                >
                    {eventItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-[33.33%] flex-shrink-0 px-2"
                        >
                            <div className="relative  h-[800px]  rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={item.src}
                                    alt={item.text}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-start justify-start p-9 py-96 bg-black/50 text-white text-center">
                                    <h2 className=" font-extrabold text-3xl font-[Satisfy]">{item.text}</h2>
                                    <h2 className="text-4xl underline p-4 decoration-red-500 font-bold">{item.price}</h2>
                                    <p className="text-lg font-bold pt-6">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
                {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                        aria-current={currentSlide === index}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Event;
