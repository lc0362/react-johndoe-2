import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    const progress = (scrollY / (bodyHeight - windowHeight)) * 100;

    setScrollProgress(progress);

    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}>
      <div
        className="progress-circle"
        style={{ borderImage: `conic-gradient(#0d6efd  ${scrollProgress}%, transparent 0%) 1` }}
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
      >
        <div className="arrow-up" />
      </div>
    </div>
  );
};

export default ScrollToTopButton;