import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export const useScrollWhiteFade = () => {
  const [isFlickScrolling, setIsFlickScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = Date.now();
    let fadeTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTimestamp = Date.now();
      const timeDiff = currentTimestamp - lastTimestamp;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);
      
      if (timeDiff > 0) {
        const velocity = scrollDiff / timeDiff;
        
        // If velocity is high (flick scroll), trigger immediately
        if (velocity > 0.8) {
          setIsFlickScrolling(true);
          clearTimeout(fadeTimeout);
          fadeTimeout = setTimeout(() => {
            setIsFlickScrolling(false);
          }, 800);
        }
      }

      lastScrollY = currentScrollY;
      lastTimestamp = currentTimestamp;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return isFlickScrolling;
};