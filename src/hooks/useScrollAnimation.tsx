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
    let scrollVelocity = 0;
    let isUserScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let velocityTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newVelocity = Math.abs(currentScrollY - lastScrollY);
      scrollVelocity = newVelocity;
      lastScrollY = currentScrollY;

      // User is actively scrolling
      isUserScrolling = true;
      clearTimeout(scrollTimeout);
      
      // After user stops scrolling, check if there's momentum
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        
        // If there's still significant velocity after user stopped, it's a flick scroll
        if (scrollVelocity > 15) {
          setIsFlickScrolling(true);
          clearTimeout(velocityTimeout);
          velocityTimeout = setTimeout(() => {
            setIsFlickScrolling(false);
          }, 800); // Longer duration for more noticeable effect
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(velocityTimeout);
    };
  }, []);

  return isFlickScrolling;
};