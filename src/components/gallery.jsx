import React, { useEffect, useState } from 'react';
import { images } from "../constant/images";
import 'flowbite';

export const Gallery = () => {
    const galleryItems = [
        { src: images.gallery1 },
        { src: images.gallery2 },
        { src: images.gallery3 },
        { src: images.gallery4 },
        { src: images.gallery5 },
        { src: images.gallery6 },
        { src: images.gallery7 },
        { src: images.gallery8 }
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
    const totalItems = galleryItems.length;

    useEffect(() => {
        const handleResize = () => {
            setVisible(getVisibleItems());
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        // Auto-rotate slides
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalItems);
        }, 5000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [totalItems]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div id='gallery' className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[Satisfy] font-bold mb-4">
                        Our <span className='text-red-500'>Gallery</span> 
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base font-bold lg:text-xl">
                        Explore our culinary masterpieces
                    </p>
                </div>

                {/* Gallery Carousel */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                    <div className="relative h-full">
                        <div
                            className="flex transition-transform duration-700 ease-in-out h-full"
                            style={{ transform: `translateX(-${(currentSlide * 100) / visible}%)` }}
                        >
                            {galleryItems.concat(galleryItems.slice(0, visible)).map((item, index) => (
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
                                            alt={`Gallery Image ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {Array.from({ length: totalItems }).map((_, index) => (
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
