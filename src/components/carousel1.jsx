import React, { useState, useEffect } from 'react';

const SLIDE_DURATION = 4000;
const SLIDE_CLASSES = 'w-full transition-transform duration-300 transform-gpu';
const BUTTON_CLASSES = 'absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    'https://placehold.co/800x400',
    'https://placehold.co/800x400',
    'https://placehold.co/800x400',
  ];

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-screen-sm mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="flex">
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt="carousel image" className={`${SLIDE_CLASSES} ${index === currentSlide ? '' : 'hidden'}`} />
          ))}
        </div>
      </div>
      <button className={`${BUTTON_CLASSES} left-0`} onClick={prevSlide}>←</button>
      <button className={`${BUTTON_CLASSES} right-0`} onClick={nextSlide}>→</button>
    </div>
  )
}

export default Carousel;
