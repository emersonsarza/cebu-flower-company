import { useState, useEffect } from 'react';

const useIntersection = (element, rootMargin = '-10%', check = 'once') => {
  const [isVisible, setState] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (check === 'always') {
          setState(entry.isIntersecting);
        }
        if (check === 'once' && entry.isIntersecting && !isVisible) {
          setState(true);
        }
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, [check, element, isVisible, rootMargin]);

  return isVisible;
};

export default useIntersection;
