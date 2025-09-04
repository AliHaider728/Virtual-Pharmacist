import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'KS – ',
    role: 'Practice Manager',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    text: 'I got 1 year of therapy in such a short time. I left with a solid plan and the support "tools" I needed to continue forward on my journey. Thank you all!',
  },
  {
    name: 'KS -',
    role: 'Account Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    text: 'Cholla Behavioral Health is run by staff that go above and beyond to help patients. Their support was life-changing!',
  },
  {
    name: 'Easton B.',
    role: 'Student / Union',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    text: 'Incredible facilities and staff alike – you can tell Cholla cares deeply about their clients\' growth and wellbeing!',
  },
  {
    name: 'Sarah L.',
    role: 'Healthcare Assistant',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    text: 'Their counselors are empathetic, attentive, and genuinely helpful. I\'ve seen real improvement in just a few months.',
  },
  {
    name: 'David R.',
    role: 'Freelance Designer',
    image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
    text: 'Professional, kind, and insightful. Cholla helped me break through mental blocks I didn\'t even realize I had.',
  },
  {
    name: 'Nora W.',
    role: 'Mother & Advocate',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    text: 'The therapy sessions gave my daughter her confidence back. Our family is so grateful for the transformation.',
  },
  {
    name: 'Carlos T.',
    role: 'High School Teacher',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'Easy to schedule, warm environment, and real results. I recommend Cholla to anyone struggling with anxiety or stress.',
  },
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  const loadShow = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const items = document.querySelectorAll('.slider-item');
    items.forEach((item, index) => {
      // Adjust card width based on screen size
      const cardWidth = window.innerWidth < 640 ? 280 : 320; // 280px for mobile, 320px for larger screens
      const centerOffset = cardWidth / 2;
      if (index === active) {
        item.style.transform = `translateX(calc(50% - ${centerOffset}px))`;
        item.style.zIndex = 10;
        item.style.filter = 'none';
        item.style.opacity = 1;
      } else if (index > active) {
        const stt = index - active;
        // Use vw units for responsive offset
        const offset = window.innerWidth < 640 ? 100 * stt : 120 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px + ${offset}px)) scale(${1 - 0.15 * stt}) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = 10 - stt;
        item.style.filter = 'blur(3px)';
        item.style.opacity = stt > 2 ? 0 : 0.7;
      } else {
        const stt = active - index;
        const offset = window.innerWidth < 640 ? 100 * stt : 120 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px - ${offset}px)) scale(${1 - 0.15 * stt}) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = 10 - stt;
        item.style.filter = 'blur(3px)';
        item.style.opacity = stt > 2 ? 0 : 0.7;
      }
    });

    setTimeout(() => setIsAnimating(false), 600);
  };

  const updateProgress = () => {
    return ((active + 1) / testimonials.length) * 100;
  };

  useEffect(() => {
    loadShow();
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', loadShow); // Re-run on resize for responsiveness
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', loadShow);
    };
  }, [active]);

  const nextSlide = () => {
    if (isAnimating) return;
    setActive((prev) => (prev + 1 < testimonials.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : testimonials.length - 1));
  };

  const goToSlide = (index) => {
    if (isAnimating || index === active) return;
    setActive(index);
  };

  return (
    <section className="w-full bg-[#283354] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-[#3b97d0] text-lg sm:text-xl md:text-2xl font-medium mb-2">
            Reviews
          </h3>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            What our clients say about us
          </h1>
        </div>

        {/* Testimonial Slider */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] flex justify-center items-center overflow-hidden mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="slider-item absolute w-[280px] sm:w-[300px] md:w-[320px] h-[350px] sm:h-[380px] md:h-[400px] text-center bg-gradient-to-br from-white to-gray-100 rounded-[20px] p-5 sm:p-6 md:p-7 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] top-0 shadow-[0_20px_40px_rgba(0,0,0,0.1),0_15px_12px_rgba(0,0,0,0.08)] cursor-pointer border border-[rgba(255,255,255,0.2)] hover:-translate-y-[5px] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15),0_20px_20px_rgba(0,0,0,0.1)]"
              onClick={() => goToSlide(index)}
            >
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                5.0
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-110"
              />
              <h2 className="text-lg sm:text-xl text-gray-800 mb-2 font-semibold">
                {testimonial.name}
              </h2>
              <strong className="text-sm text-gray-500 block mb-4 font-medium">
                {testimonial.role}
              </strong>
              <div className="text-amber-500 text-xl mb-4">★★★★★</div>
              <p className="text-sm text-gray-700 leading-relaxed italic line-clamp-4">
                {testimonial.text}
              </p>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/3 -translate-y-1/2 left-4 md:left-4 text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.3)] rounded-full w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-xl sm:text-2xl font-bold cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-95 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/3 -translate-y-1/2 right-4 md:right-4 text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.3)] rounded-full w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-xl sm:text-2xl font-bold cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:scale-110 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-95 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        {/* Slider Controls */}
        <div className="flex flex-col items-center space-y-4">
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 border-2 border-transparent ${
                  active === index 
                    ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                    : 'bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.7)] hover:scale-110'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-64 sm:w-80 md:w-96 h-1 bg-[rgba(255,255,255,0.2)] rounded-sm overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-400 to-cyan-400 rounded-sm transition-all duration-600 ease-linear"
              style={{ width: `${updateProgress()}%` }}
            />
          </div>

          {/* Counter */}
          <div className="text-white text-opacity-80 text-sm">
            <span>{active + 1}</span> / <span>{testimonials.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;