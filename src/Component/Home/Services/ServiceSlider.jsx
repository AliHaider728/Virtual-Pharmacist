import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function Virtual() {
  const slideRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/medication-1.png',
      name: 'Prescription Management',
      type: 'Virtual Pharmacist',
      description: 'Streamline your prescription processes with expert service handling reviews to renewals.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/emissystemone-1-1.png',
      name: 'Seamless System Connection',
      type: 'Virtual Pharmacist',
      description: 'Our services integrate effortlessly with existing systems like EMIS and SystmOne. Designed for remote operation, we ensure a cohesive experience'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/supervision-1.png',
      name: 'Clinical Supervision',
      type: 'Virtual Pharmacist',
      description: 'Maintain the highest standards of patient care and safety with our Clinical Supervision service. Our senior pharmacists provide ongoing support and oversight.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Solutions-Careers-About-Contact-1-1.png',
      name: 'Innovative Technology‑Driven Solution',
      type: 'Virtual Pharmacist',
      description: 'Our bespoke management system empowers our team to deliver exceptional support with effortless schedule overviews, workflow management, clinical supervision, and compliance monitoring.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Solutions-Careers-About-Contact-e1723814416969-1.png',
      name: 'QOF Support',
      type: 'Virtual Pharmacist',
      description: 'Maximise QOF points with specialised support to meet and exceed targets.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/prescription-1.png',
      name: 'Technology-Driven Solutions',
      type: 'Virtual Pharmacist',
      description: 'Bespoke management system for exceptional support and workflow management.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/medication-1.png',
      name: 'Bespoke Solutions',
      type: 'Virtual Pharmacist',
      description: 'Workflows designed with your practice in mind through close collaboration.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/puzzle-1.png',
      name: 'Seamless Integration',
      type: 'Virtual Pharmacist',
      description: 'Effortless integration with EMIS and SystmOne for cohesive experience.'
    },
    {
      image: 'https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/prescription-1-2.png',
      name: 'Personal Support',
      type: 'Virtual Pharmacist',
      description: 'Small specialist team offering personal touch - we\'re here when you need us!'
    }
  ];

  const nextSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.office-item');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.office-item');
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <style>{`
        .office-title {
          font-family: sans-serif;
          text-align: center;
          color: #3b97d0;
          font-size: 3rem;
        }

        .office-slider-container {
          width: 100%;
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
          backgroundImage:'url("https://virtualpharmacist.co.uk/wp-content/uploads/2024/11/Frame-2147226559.png")'
          box-shadow: 0 30px 50px #bdbdbd;
          position: relative;
          border:1px solid trasnprent;
          border-radius:30px;
        }

        .office-slide {
          width: max-content;
          margin-top: 30px;
          position: relative;
          height: 350px;
        }

        .office-item {
          width: 400px;
          height: 280px;
          background-position: 50% 50%;
          display: inline-block;
          transition: 1s;
          background-size: 200%;
          position: absolute;
          z-index: 1;
          border-radius: 0px;
          overflow: visible;
          cursor: pointer;
        }

        .office-item .image-container {
          width: 100%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transition: 1s;
          border-radius: 0px;
          overflow: hidden;
          position: relative;
        }

        .office-item:hover .image-container  {
           scale:1
        }
          
        .office-item .content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          width: 100%;
          padding: 0;
          font-family: system-ui;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: 0.5s;
          overflow: hidden;
          height: 0;
          border-radius: 0 0 10px 10px;
          box-sizing: border-box;
        }

        .office-item .content .name {
          font-family: 'Anton', sans-serif;
          margin: 10px 0 6px 0;
          font-size: 16px;
          color: #333;
          font-weight: bold;
        }

        .office-item .content .type {
          font-size: 13px;
          color: #3b97d0;
          margin: 5px 0;
          font-weight: 500;
        }

        .office-item .content .description {
          font-size: 15px;
          color: #666;
          margin: 8px 0;
          line-height: 1.4;
        }

        .office-item:hover .content {
          height: 170px;
          padding: 15px 15px;
          margin-bottom:30px;
          
        }

        .office-item:nth-child(1) {
          transform: translate(-150%);
          opacity: 0;
        }

        .office-item:nth-child(1) .image-container {
         
        }

        .office-item:nth-child(2) {
          transform: translate(-40%);
          opacity: 1;
          z-index: 2;
        }

        .office-item:nth-child(2) .image-container {
          background-position: 20% 50%;
        }

        .office-item:nth-child(3) {
          transform: translate(70%);
          opacity: 1;
          z-index: 3;
        }

        .office-item:nth-child(3) .image-container {
          background-position: 50% 50%;
        }

        .office-item:nth-child(4) {
          transform: translate(180%);
          opacity: 1;
          z-index: 2;
        }

        .office-item:nth-child(4) .image-container {
          background-position: 80% 50%;
        }

        .office-item:nth-child(n+5) {
          transform: translate(290%);
          opacity: 0;
          z-index: 1;
        }

        .office-item:nth-child(n+5) .image-container {
          background-position: 100% 50%;
        }

        .office-buttons {
          margin-top: 50px;
          text-align: center;
        }

        .office-buttons button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid transparent;
          transition: 0.5s;
          background: transparent;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 5px;
          background-color: #3b97d0;
          color: white;
        }

        .office-buttons button:hover {
          background-color: white;
          color: red;
          border: 1px solid grey;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .modal-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          max-height: 90vh;
        }

        .modal-close {
          position: absolute;
          top: -20px;
          right: -20px;
          background: white;
          color: black;
          border-radius: 50%;
          cursor: pointer;
          padding: 5px;
          border: 1px solid gray;
        }

        @media (max-width: 768px) {
          .office-title {
            font-size: 2rem;
          }

          .office-slider-container {
            max-width: 100%;
            padding: 10px;
          }

          .office-slide {
            height: 400px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .office-item {
            width: 90%;
            max-width: 350px;
            height: 240px;
          }

          .office-item .image-container {
            background-size: cover !important;
          }

          .office-item .content {
            width: 100%;
            padding: 0;
            height: 0;
          }

          .office-item:hover .content {
            height: 160px;
            padding: 12px 8px;
          }

          .office-item:nth-child(1) {
            transform: translate(-120%);
            opacity: 0;
          }

          .office-item:nth-child(2) {
            transform: translate(-60%);
            opacity: 0;
          }

          .office-item:nth-child(3) {
            transform: translate(0%);
            opacity: 1;
            z-index: 3;
            left: 50%;
            margin-left: -175px;
          }

          .office-item:nth-child(4) {
            transform: translate(60%);
            opacity: 0;
          }

          .office-item:nth-child(n+5) {
            transform: translate(120%);
            opacity: 0;
          }

          .office-buttons {
            margin-top: 80px;
          }
        }

        @media (max-width: 480px) {
          .office-title {
            font-size: 1.5rem;
            padding: 0 10px;
          }

          .office-slider-container {
            margin: 20px auto;
            padding: 5px;
          }

          .office-slide {
            height: 350px;
          }

          .office-item {
            height: 180px !important;
            max-width: 300px !important;
          }

          .office-item:nth-child(3) {
            margin-left: -150px;
          }

          .office-buttons button {
            width: 40px;
            height: 40px;
          }

          .office-item .content .name {
            font-size: 13px;
            margin: 6px 0 4px 0;
          }

          .office-item .content .type {
            font-size: 10px;
            margin: 2px 0;
          }

          .office-item .content .description {
            font-size: 9px;
            margin: 4px 0;
            line-height: 1.2;
          }
        }
      `}</style>

      <div className="office-slider-container">
        <div className="flex flex-col justify-center items-center text-center px-4">
          <span className="mt-8 text-blue-600 font-bold text-sm md:text-base mb-3 block">
            What We Offer
          </span>
          <h1 className="text-[#002B5B] text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
           Our Services
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl leading-relaxed">
            We pride ourselves on delivering flexible and tailored clinical pharmacist support that meets the unique needs of every practice. We work closely with you to identify the specific services you require and create a bespoke workflow that optimises patient outcomes, reduces workload, and enhances the overall efficiency of your practice.
          </p>
        </div>

        <div className="office-slide" ref={slideRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="office-item"
              onClick={() => openModal(service.image)}
            >
              <div
                className="image-container mt-7"
                style={{ backgroundImage: `url("${service.image}")` }}
              />
              <div className="content">
                <div className="name">{service.name}</div>
                <div className="type">{service.type}</div>
                <div className="description">{service.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="office-buttons">
          <button onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full View" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Virtual;