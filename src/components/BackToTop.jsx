import React, { useEffect, useRef, useState } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);

      const footer = document.getElementById('footer');
      const button = buttonRef.current;

      if (footer && button) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const buffer = 60;

        if (footerRect.top < windowHeight - buffer) {
          setIsAtFooter(true);
        } else {
          setIsAtFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <div
      ref={buttonRef}
      style={{
        position: isAtFooter ? 'absolute' : 'fixed',
        bottom: isAtFooter ? '480px' : '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      <button
        onClick={scrollToTop}
        className="ms-back-to-top d-none d-md-inline"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up me-2"></i> Back to top
      </button>
    </div>
  );
};

export default BackToTop;
