import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    // The function to handle mouse movement and update cursor position
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use translate3d for better GPU acceleration and smoother movement
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Add event listener for mouse movement with passive flag for better performance
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Clean up function to remove event listener and restore cursor
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none"
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsl(186, 100%, 75%), hsl(186, 100%, 55%))',
        boxShadow: '0 0 25px hsl(186, 100%, 70%), 0 0 50px hsl(186, 100%, 60%)',
      }}
    />
  );
};

export default CustomCursor;
