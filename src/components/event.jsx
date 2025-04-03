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

    // Adjust visible items based on screen size
    const getVisibleItems = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // mobile
            if (window.innerWidth < 1024) return 2; // tablet
            return 3; // desktop
        }
        return 3; // default
    };

    const [visible, setVisible] = useState(getVisibleItems());
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalItems = eventItems.length;
    const maxSlideIndex = totalItems - visible;

    useEffect(() => {
        const handleResize = () => {
            setVisible(getVisibleItems());
            // Reset current slide if it's beyond the new maxSlideIndex
            setCurrentSlide(prev => Math.min(prev, totalItems - getVisibleItems()));
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        // Auto-rotate slides
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev >= maxSlideIndex) return 0;
                return prev + 1;
            });
        }, 5000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [totalItems, maxSlideIndex]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div id='event' className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[Satisfy] font-bold mb-4">
                        Our <span className='text-red-500'>Events</span> 
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl font-bold">
                        Discover our exceptional event offerings
                    </p>
                </div>

                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden rounded-lg">
                    <div className="relative h-full">
                        <div
                            className="flex transition-transform duration-700 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentSlide * (100 / visible)}%)` }}
                        >
                            {eventItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${
                                        visible === 1 ? 'w-full' : 
                                        visible === 2 ? 'w-1/2' : 
                                        'w-1/3'
                                    } flex-shrink-0 p-2`}
                                >
                                    <div className="relative h-full rounded-lg overflow-hidden shadow-lg group">
                                        <img
                                            src={item.src}
                                            alt={item.text}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-4 sm:p-6">
                                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-[Satisfy] text-white mb-2">
                                                {item.text}
                                            </h2>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500 mb-2">
                                                {item.price}
                                            </h3>
                                            <p className="text-sm sm:text-base text-white/90 line-clamp-3">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                                    currentSlide === index 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


