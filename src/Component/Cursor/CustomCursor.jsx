import React, { useEffect, useRef, useState } from 'react';
import './cursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    const speed = 0.1;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', move);
    requestAnimationFrame(animate);

    const hoverEls = document.querySelectorAll('a, button, img');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    });

    return () => {
      document.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? 'hovered' : ''}`}
    ></div>
  );
};

export default CustomCursor;
