import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [chefsCount, setChefsCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  const images = [
    { src: "../img/about-1.jpg", delay: 0.1, classes: "w-100", alignment: "text-start" },
    { src: "../img/about-2.jpg", delay: 0.3, classes: "w-75", alignment: "text-start", style: { marginTop: '25%' } },
    { src: "../img/about-3.jpg", delay: 0.5, classes: "w-75", alignment: "text-end" },
    { src: "../img/about-4.jpg", delay: 0.7, classes: "w-100", alignment: "text-end" }
  ];

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      const yearsTimer = setInterval(() => {
        setYearsCount(prev => {
          if (prev < 15) return prev + 1;
          clearInterval(yearsTimer);
          return 15;
        });
      }, 100);

      const chefsTimer = setInterval(() => {
        setChefsCount(prev => {
          if (prev < 50) return prev + 2;
          clearInterval(chefsTimer);
          return 50;
        });
      }, 60);

      return () => {
        clearInterval(yearsTimer);
        clearInterval(chefsTimer);
      };
    }
  }, [isInView]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Images Section */}
          <div className="col-lg-6">
            <div className="row g-3">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className={`col-6 ${img.alignment}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    delay: img.delay, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <motion.img
                    src={img.src}
                    alt={`About ${index + 1}`}
                    className={`img-fluid rounded ${img.classes}`}
                    style={img.style}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(146, 26, 64, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h5 
              className="section-title ff-secondary text-start text-primary fw-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Us
            </motion.h5>
            
            <motion.h1 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to{" "}
              <motion.i 
                className="fa fa-utensils text-primary me-2"
                whileHover={{ 
                  rotate: 360,
                  color: '#FEA116',
                  transition: { duration: 0.5 }
                }}
              ></motion.i>
              Restoran
            </motion.h1>
            
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            </motion.p>
            
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </motion.p>

            {/* Stats Section with Counter Animation */}
            <div className="row g-4 mb-4" ref={counterRef}>
              <motion.div
                className="col-sm-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="d-flex align-items-center border-start border-5 border-primary px-3"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(146, 26, 64, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.h1 
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {yearsCount}
                  </motion.h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="col-sm-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.8, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="d-flex align-items-center border-start border-5 border-primary px-3"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(146, 26, 64, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.h1 
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    {chefsCount}
                  </motion.h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Read More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link 
                className="btn btn-primary py-3 px-5 mt-2" 
                to="/about"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <motion.span
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Read More
                </motion.span>
                <motion.div
                  className="button-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    boxShadow: "0 0 20px rgba(254, 161, 22, 0.5), 0 5px 15px rgba(146, 26, 64, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 'inherit',
                    zIndex: 0
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
