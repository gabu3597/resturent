import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: 'fab fa-twitter', color: '#1DA1F2', href: '#' },
    { icon: 'fab fa-facebook-f', color: '#4267B2', href: '#' },
    { icon: 'fab fa-youtube', color: '#FF0000', href: '#' },
    { icon: 'fab fa-linkedin-in', color: '#0077B5', href: '#' }
  ];

  const footerColumns = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Reservation', path: '/booking' },
        { name: 'Privacy Policy', path: '' },
        { name: 'Terms & Condition', path: '' }
      ]
    }
  ];

  return (
    <motion.div 
      className="container-fluid bg-dark text-light footer pt-5 mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Company Column */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h4 
              className="section-title ff-secondary text-start text-primary fw-normal mb-4"
              whileHover={{ 
                color: '#FEA116',
                transition: { duration: 0.3 }
              }}
            >
              Company
            </motion.h4>
            {footerColumns[0].links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Link 
                  className="btn btn-link" 
                  to={link.path}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <motion.span
                    whileHover={{
                      color: '#FEA116',
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {link.name}
                  </motion.span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: '#FEA116',
                      transformOrigin: 'left'
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h4 
              className="section-title ff-secondary text-start text-primary fw-normal mb-4"
              whileHover={{ 
                color: '#FEA116',
                transition: { duration: 0.3 }
              }}
            >
              Contact
            </motion.h4>
            <motion.p 
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
            </motion.p>
            <motion.p 
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </motion.p>
            <motion.p 
              className="mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <i className="fa fa-envelope me-3"></i>info@example.com
            </motion.p>
            <motion.div 
              className="d-flex pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={index}
                  className="btn btn-outline-light btn-social" 
                  href={social.href}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: social.color,
                    borderColor: social.color,
                    boxShadow: `0 0 15px ${social.color}40`,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Opening Hours Column */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4 
              className="section-title ff-secondary text-start text-primary fw-normal mb-4"
              whileHover={{ 
                color: '#FEA116',
                transition: { duration: 0.3 }
              }}
            >
              Opening
            </motion.h4>
            <motion.h5 
              className="text-light fw-normal"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Monday - Saturday
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              09AM - 09PM
            </motion.p>
            <motion.h5 
              className="text-light fw-normal"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Sunday
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              10AM - 08PM
            </motion.p>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h4 
              className="section-title ff-secondary text-start text-primary fw-normal mb-4"
              whileHover={{ 
                color: '#FEA116',
                transition: { duration: 0.3 }
              }}
            >
              Newsletter
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </motion.p>
            <motion.div 
              className="position-relative mx-auto" 
              style={{maxWidth: '400px'}}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.input 
                className="form-control border-primary w-100 py-3 ps-4 pe-5" 
                type="text" 
                placeholder="Your email"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 10px rgba(254, 161, 22, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
              <motion.button 
                type="button" 
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(254, 161, 22, 0.5)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                SignUp
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="copyright">
          <div className="row">
            <motion.div 
              className="col-md-6 text-center text-md-start mb-3 mb-md-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              &copy; <a className="border-bottom" href="#">Restoran</a>, All Right Reserved. 
              Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>
              Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
            </motion.div>
            <motion.div 
              className="col-md-6 text-center text-md-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="">Cookies</Link>
                <Link to="">Help</Link>
                <Link to="">FQAs</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
