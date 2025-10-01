import React, { useEffect } from 'react';

const ScrollEffects: React.FC = () => {
  useEffect(() => {
    // Spinner
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show');
      }, 1000);
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top') as HTMLElement;
    
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        if (backToTop) backToTop.style.display = 'block';
      } else {
        if (backToTop) backToTop.style.display = 'none';
      }
    };

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const toggleNavbar = () => {
      if (window.scrollY > 45) {
        navbar?.classList.add('sticky-top');
      } else {
        navbar?.classList.remove('sticky-top');
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    window.addEventListener('scroll', toggleNavbar);

    // Back to top click handler
    if (backToTop) {
      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
      window.removeEventListener('scroll', toggleNavbar);
    };
  }, []);

  return null;
};

export default ScrollEffects;
