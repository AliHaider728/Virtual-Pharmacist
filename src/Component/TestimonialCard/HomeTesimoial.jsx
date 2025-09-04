import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'RS – Practice Manager ',
    text: "Laura is focused on ensuring the accurate management of every patient's medications. I was new to the role and she has been like an additional expert support. Very grateful for her help!",
  },
  {
    name: 'DW – Practice Manager',
      text: 'It was great to see positive feedback from patients after the reviews. Well done',
  },
  {
    name: 'Dr D – Clinical Director (CEO)',
     
     text: 'Virtual Pharmacist Limited has been invaluable to our Integrated Care Board, improving efficiency in achieving commissioned outcomes. Their expertise in medication reconciliation has led to clear improvements in patient care and treatment adherence.',
  },
  {
    name: 'LB – GP',
      text: 'Since partnering with Virtual Pharmacist Limited, our appointment availability has significantly improved. Their experts handle all the complexities of medication management, meaning fewer follow-ups for us and overall better care for our patients.',
  },
  {
    name: 'RP – Clinical Director PCN',
      text: 'Virtual Pharmacist provides our practice with high-quality services that reduce pressure on GPs and enhance the quality of medication management and prescribing processes. They fully understand general practice systems and consistently ensure our practice receives the best possible service.',
  },
  
];

const TestimonialSliderHome = () => {
  const [active, setActive] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  const loadShow = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const items = document.querySelectorAll('.slider-item');
    items.forEach((item, index) => {
      const cardWidth = window.innerWidth < 640 ? 320 : 380;
      const centerOffset = cardWidth / 2;
      
      if (index === active) {
        // Active card - center with blue background and white text
        item.style.transform = `translateX(calc(50% - ${centerOffset}px)) scale(1.05)`;
        item.style.zIndex = 20;
        item.style.opacity = 1;
        item.style.filter = 'none';
        item.style.backgroundColor = '#0496FF';
        item.style.color = 'white';
        item.style.boxShadow = '0 20px 40px rgba(4, 150, 255, 0.3)';
        
        // Update text color for active card
        const textElement = item.querySelector('.testimonial-text');
        const nameElement = item.querySelector('.testimonial-name');
        if (textElement) textElement.style.color = 'white';
        if (nameElement) nameElement.style.color = '#2A3172';
      } else if (index > active) {
        // Cards to the right
        const stt = index - active;
        const offset = window.innerWidth < 640 ? 90 * stt : 110 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px + ${offset}px)) scale(${1 - 0.08 * stt})`;
        item.style.zIndex = 20 - stt;
        item.style.opacity = stt > 2 ? 0 : 0.7;
        item.style.filter = 'none';
        item.style.backgroundColor = 'white';
        item.style.color = '#374151';
        item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        
        // Reset text colors for inactive cards
        const textElement = item.querySelector('.testimonial-text');
        const nameElement = item.querySelector('.testimonial-name');
        if (textElement) textElement.style.color = '#6B7280';
        if (nameElement) nameElement.style.color = '#374151';
      } else {
        // Cards to the left
        const stt = active - index;
        const offset = window.innerWidth < 640 ? 90 * stt : 110 * stt;
        item.style.transform = `translateX(calc(50% - ${centerOffset}px - ${offset}px)) scale(${1 - 0.08 * stt})`;
        item.style.zIndex = 20 - stt;
        item.style.opacity = stt > 2 ? 0 : 0.7;
        item.style.filter = 'none';
        item.style.backgroundColor = 'white';
        item.style.color = '#374151';
        item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        
        // Reset text colors for inactive cards
        const textElement = item.querySelector('.testimonial-text');
        const nameElement = item.querySelector('.testimonial-name');
        if (textElement) textElement.style.color = '#6B7280';
        if (nameElement) nameElement.style.color = '#374151';
      }
    });

    setTimeout(() => setIsAnimating(false), 500);
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
    window.addEventListener('resize', loadShow);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', loadShow);
    };
  }, [active]);

  // Auto-slide functionality for smooth operation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [active, isAnimating]);

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
    <section className="w-full  py-12 md:py-16" style={{backgroundImage:'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png")',
      backgroundPosition:"top center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      objectFit:"cover"
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#0496FF' }}>
            Testimonials
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold" style={{ color: '#2A3172' }}>
            What our clients say about us
          </h1>
        </div>

        <div className="relative w-full h-[300px] sm:h-[320px] md:h-[340px] flex justify-center items-center overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="slider-item absolute w-[320px] sm:w-[360px] md:w-[480px] h-[260px] sm:h-[280px] text-center bg-white rounded-xl p-6 transition-all duration-500 ease-out cursor-pointer border border-gray-100 flex flex-col justify-center items-center"
              onClick={() => goToSlide(index)}
              style={{
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <p className="testimonial-text text-baseb leading-relaxed italic line-clamp-4 mb-6 text-gray-500">
                "{testimonial.text}"
              </p>
              <h2 className="testimonial-name text-lg font-bold text-gray-800">
                {testimonial.name}
              </h2>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-0 text-white rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 z-30"
            style={{
              background: 'linear-gradient(135deg, #0496FF 0%, #0369A1 100%)',
              boxShadow: '0 8px 25px rgba(4, 150, 255, 0.3)',
            }}
          >
            <span className="text-2xl font-bold">←</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-0 text-white rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 z-30"
            style={{
              background: 'linear-gradient(135deg, #0496FF 0%, #0369A1 100%)',
              boxShadow: '0 8px 25px rgba(4, 150, 255, 0.3)',
            }}
          >
            <span className="text-2xl font-bold">→</span>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: active === index ? '#0496FF' : '#D1D5DB',
                transform: active === index ? 'scale(1.2)' : 'scale(1)',
                boxShadow: active === index ? '0 4px 12px rgba(4, 150, 255, 0.4)' : 'none',
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderHome;