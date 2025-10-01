import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fa-user-tie',
      title: 'Master Chefs',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon: 'fa-utensils',
      title: 'Quality Food',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon: 'fa-cart-plus',
      title: 'Online Order',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Service',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-sm-6"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="service-item rounded pt-3"
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 25px rgba(146, 26, 64, 0.3)",
                  scale: 1.02
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  damping: 10
                }}
                style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient glow border effect */}
                <motion.div
                  className="gradient-border"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, #FEA116, #C75B7A, #921A40)',
                    borderRadius: 'inherit',
                    padding: '2px',
                    zIndex: -1
                  }}
                >
                  <div 
                    style={{
                      background: 'white',
                      borderRadius: 'inherit',
                      height: '100%',
                      width: '100%'
                    }}
                  />
                </motion.div>

                <div className="p-4 text-center">
                  <motion.i
                    className={`fa fa-3x ${service.icon} text-primary mb-4`}
                    whileHover={{ 
                      rotate: 15, 
                      scale: 1.1,
                      color: '#FEA116'
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 150,
                      damping: 8
                    }}
                    style={{
                      display: 'inline-block',
                      cursor: 'default'
                    }}
                  />
                  
                  <motion.h5
                    whileHover={{
                      color: '#921A40',
                      scale: 1.05
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h5>
                  
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      y: -2
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
