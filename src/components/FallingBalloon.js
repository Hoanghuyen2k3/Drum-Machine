import React, { useEffect, useRef } from 'react';

const FallingBalloon = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createballoon = () => {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      container.appendChild(balloon);

      const left = Math.random() * (window.innerWidth - 100);
      balloon.style.left = `${left}px`;

      const duration = Math.random() * 5 + 5;
      balloon.style.animationDuration = `${duration}s`;

      setTimeout(() => {
        container.removeChild(balloon);
      }, duration * 1000);
    };

    const handleMouseMove = (event) => {
      const balloons = container.getElementsByClassName('balloon');
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      for (let i = 0; i < balloons.length; i++) {
        const balloon = balloons[i];
        const rect = balloon.getBoundingClientRect();
        const balloonX = rect.left + rect.width / 2;
        const balloonY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mouseX - balloonX, 2) + Math.pow(mouseY - balloonY, 2)
        );

        if (distance < 100) {
          const angle = Math.atan2(mouseY - balloonY, mouseX - balloonX);
          const newX = balloonX - Math.cos(angle) * 100;
          const newY = balloonY - Math.sin(angle) * 100;
          balloon.style.left = `${newX}px`;
          balloon.style.top = `${newY}px`;
        }
      }
    };


    document.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(createballoon, 200);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="balloon-container"></div>;
};

export default FallingBalloon;
