import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="w-100 py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <motion.h1 
              className="display-3 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                background: "linear-gradient(45deg, #FEA116, #c7596a, #FEA116)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 2s ease-in-out infinite"
              }}
              style={{
                cursor: "default"
              }}
            >
              Enjoy Our<br/>Delicious Meal
            </motion.h1>
            
            <motion.p 
              className="text-white mb-4 pb-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link 
                to="/booking" 
                className="btn btn-primary py-sm-3 px-sm-5 me-3"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <motion.span
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(254, 161, 22, 0.4), 0 0 20px rgba(199, 91, 122, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ 
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Book A Table
                </motion.span>
              </Link>
            </motion.div>
          </div>
          
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <motion.img 
              className="img-fluid" 
              src="../../assets/hero.png" 
              alt="Hero"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
              style={{ 
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
