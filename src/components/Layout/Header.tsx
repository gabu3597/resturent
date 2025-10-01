import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.2,
          type: "spring",
          stiffness: 100
        }}
      >
        <Link to="/" className="navbar-brand p-0">
          <motion.h1 
            className="text-primary m-0"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <motion.i 
              className="fa fa-utensils me-3"
              whileHover={{ 
                rotate: 15,
                transition: { duration: 0.2 }
              }}
            ></motion.i>
            Restoran
          </motion.h1>
        </Link>
      </motion.div>

      <motion.button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="fa fa-bars"></span>
      </motion.button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1 + 0.3,
                duration: 0.4
              }}
            >
              <Link 
                to={link.path} 
                className="nav-item nav-link"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <motion.span
                  whileHover={{
                    color: '#FEA116',
                    transition: { duration: 0.2 }
                  }}
                  style={{ 
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {link.name}
                </motion.span>
                <motion.div
                  className="nav-underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #FEA116, #C75B7A)',
                    transformOrigin: 'left',
                    zIndex: 0
                  }}
                />
              </Link>
            </motion.div>
          ))}
          
          <motion.div 
            className="nav-item dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: navLinks.length * 0.1 + 0.3,
              duration: 0.4
            }}
          >
            <motion.a 
              href="#" 
              className="nav-link dropdown-toggle" 
              data-bs-toggle="dropdown"
              whileHover={{
                color: '#FEA116',
                transition: { duration: 0.2 }
              }}
            >
              Pages
            </motion.a>
            <div className="dropdown-menu m-0">
              <Link to="/booking" className="dropdown-item">Booking</Link>
              <Link to="/team" className="dropdown-item">Our Team</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.8,
            duration: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <Link to="/booking" className="btn btn-primary py-2 px-4">
            <motion.span
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            >
              Book A Table
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
