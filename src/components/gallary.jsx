import React, { useEffect, useState } from 'react';
import { images } from "../constant/images";
import 'flowbite';

export const Gallery = () => {
    // Define a flat list of gallery items
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

    const visible = 3; // Number of images visible at a time
    const totalItems = galleryItems.length;
    
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        import('flowbite').then((module) => {
            module.default();
        });

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalItems);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalItems]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div id="gallery-carousel" className="relative w-full pt-10 h-[500px] overflow-hidden">
            <div className="relative w-full">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${(currentSlide * 100) / visible}%)` }}
                >
                    {galleryItems.concat(galleryItems.slice(0, visible)).map((item, index) => (
                        <div
                            key={index}
                            className="w-[33.33%] flex-shrink-0 px-2"
                        >
                            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={item.src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
                {Array.from({ length: totalItems }).map((_, index) => (
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
