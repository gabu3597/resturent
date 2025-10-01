import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About: React.FC = () => {
  const team = [
    { id: 1, name: 'John Smith', designation: 'Head Chef' },
    { id: 2, name: 'Sarah Johnson', designation: 'Sous Chef' },
    { id: 3, name: 'Mike Wilson', designation: 'Pastry Chef' },
    { id: 4, name: 'Emma Davis', designation: 'Kitchen Manager' }
  ];

  const aboutImages = [
    { src: 'about-1.jpg', classes: 'w-100', alignment: 'text-start', delay: 0.1 },
    { src: 'about-2.jpg', classes: 'w-75', alignment: 'text-start', delay: 0.3, style: { marginTop: '25%' } },
    { src: 'about-3.jpg', classes: 'w-75', alignment: 'text-end', delay: 0.5 },
    { src: 'about-4.jpg', classes: 'w-100', alignment: 'text-end', delay: 0.7 }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <motion.h1
            className="display-3 text-white mb-3"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.nav
            aria-label="breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <ol className="breadcrumb justify-content-center text-uppercase">
              <motion.li 
                className="breadcrumb-item"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li 
                className="breadcrumb-item"
                whileHover={{ scale: 1.05 }}
              >
                <Link to="">Pages</Link>
              </motion.li>
              <li className="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </motion.nav>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Images Section */}
            <div className="col-lg-6">
              <div className="row g-3">
                {aboutImages.map((img, index) => (
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
                      className={`img-fluid rounded ${img.classes}`}
                      src={`./img/${img.src}`}
                      alt={`About ${index + 1}`}
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
                />
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

              {/* Counter Section */}
              <div className="row g-4 mb-4">
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
                      whileHover={{ 
                        scale: 1.1,
                        color: '#FEA116',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce />
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
                      whileHover={{ 
                        scale: 1.1,
                        color: '#FEA116',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <CountUp end={50} duration={2} enableScrollSpy scrollSpyOnce />
                    </motion.h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Link 
                  className="btn btn-primary py-3 px-5 mt-2" 
                  to="/team"
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
                    Meet Our Team
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

      {/* Team Section */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h5 
              className="section-title ff-secondary text-center text-primary fw-normal"
              whileHover={{ 
                color: '#FEA116',
                transition: { duration: 0.2 }
              }}
            >
              Team Members
            </motion.h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </motion.div>

          <div className="row g-4">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className="team-item text-center rounded overflow-hidden"
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 35px rgba(146, 26, 64, 0.2)",
                    scale: 1.02
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #f0f0f0'
                  }}
                >
                  <div className="rounded-circle overflow-hidden m-4">
                    <motion.img
                      className="img-fluid"
                      src={`../img/team-${member.id}.jpg`}
                      alt={member.name}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 2,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </div>
                  
                  <motion.h5 
                    className="mb-0"
                    whileHover={{ 
                      color: '#921A40',
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {member.name}
                  </motion.h5>
                  
                  <motion.small
                    whileHover={{ 
                      color: '#FEA116',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {member.designation}
                  </motion.small>
                  
                  <motion.div
                    className="d-flex justify-content-center mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, staggerChildren: 0.1 }}
                  >
                    {[
                      { icon: 'fab fa-facebook-f', color: '#4267B2' },
                      { icon: 'fab fa-twitter', color: '#1DA1F2' },
                      { icon: 'fab fa-instagram', color: '#E4405F' }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        className="btn btn-square btn-primary mx-1"
                        href=""
                        whileHover={{ 
                          scale: 1.2,
                          backgroundColor: social.color,
                          rotate: 5,
                          boxShadow: `0 5px 15px ${social.color}40`,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: socialIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <i className={social.icon}></i>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
