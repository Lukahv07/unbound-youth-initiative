import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', onMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none w-5 h-5 rounded-full transition-transform duration-75 ease-out"
      style={{
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, hsl(186, 100%, 75%), hsl(186, 100%, 55%))',
        boxShadow: '0 0 25px hsl(186, 100%, 70%), 0 0 50px hsl(186, 100%, 60%)',
      }}
    />
  );
};

export default CustomCursor;
