import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: [
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-1.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-2.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-3.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-4.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-5.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../../assets/menu-6.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' }
    ],
    lunch: [
      { name: 'Grilled Steak', price: '$125', image: '../../assets/menu-7.jpg', description: 'Delicious grilled steak with special sauce' },
      { name: 'Fish Fillet', price: '$120', image: '../../assets/menu-8.jpg', description: 'Fresh fish fillet with herbs and spices' }
    ],
    dinner: [
      { name: 'Beef Roast', price: '$135', image: '../../assets/menu-1.jpg', description: 'Tender beef roast with vegetables' },
      { name: 'Lamb Chops', price: '$140', image: '../../assets/menu-2.jpg', description: 'Juicy lamb chops with mint sauce' }
    ]
  };

  const tabs = [
    { id: 'breakfast', icon: 'fa-coffee', label: 'Popular', title: 'Breakfast' },
    { id: 'lunch', icon: 'fa-hamburger', label: 'Special', title: 'Lunch' },
    { id: 'dinner', icon: 'fa-utensils', label: 'Lovely', title: 'Dinner' }
  ];

  // Animation variants for staggered menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h5 
            className="section-title ff-secondary text-center text-primary fw-normal"
            whileHover={{ 
              color: '#FEA116',
              transition: { duration: 0.2 }
            }}
          >
            Food Menu
          </motion.h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="tab-class text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {tabs.map((tab, index) => (
              <li key={tab.id} className="nav-item">
                <motion.button
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${
                    index === 0 ? 'ms-0' : index === tabs.length - 1 ? 'me-0' : ''
                  } ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ 
                    border: 'none', 
                    background: 'none', 
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Active Tab Underline */}
                  <motion.div
                    className="tab-underline"
                    initial={false}
                    animate={{
                      scaleX: activeTab === tab.id ? 1 : 0,
                      opacity: activeTab === tab.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #FEA116, #C75B7A)',
                      transformOrigin: 'left',
                      borderRadius: '2px'
                    }}
                  />
                  
                  {/* Active Tab Background */}
                  <motion.div
                    className="tab-background"
                    initial={false}
                    animate={{
                      opacity: activeTab === tab.id ? 0.1 : 0,
                      scale: activeTab === tab.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #FEA116, #C75B7A)',
                      borderRadius: '8px',
                      zIndex: -1
                    }}
                  />

                  <motion.i
                    className={`fa ${tab.icon} fa-2x text-primary`}
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.1,
                      color: '#FEA116'
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="ps-3">
                    <motion.small 
                      className="text-body"
                      whileHover={{ color: '#921A40' }}
                    >
                      {tab.label}
                    </motion.small>
                    <motion.h6 
                      className="mt-n1 mb-0"
                      whileHover={{ 
                        color: '#921A40',
                        scale: 1.05
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tab.title}
                    </motion.h6>
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Menu Items with AnimatePresence for smooth transitions */}
          <div className="tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  transition: { duration: 0.2 }
                }}
                className="tab-pane fade show p-0 active"
              >
                <motion.div 
                  className="row g-4"
                  variants={containerVariants}
                >
                  {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
                    <motion.div 
                      key={`${activeTab}-${index}`} 
                      className="col-lg-6"
                      variants={itemVariants}
                    >
                      <motion.div
                        className="d-flex align-items-center p-3 rounded"
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(146, 26, 64, 0.15)",
                          backgroundColor: "rgba(254, 161, 22, 0.05)"
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200,
                          damping: 15
                        }}
                        style={{
                          cursor: 'pointer',
                          border: '1px solid transparent'
                        }}
                      >
                        <motion.img
                          className="flex-shrink-0 img-fluid rounded"
                          src={item.image}
                          alt={item.name}
                          style={{ width: '80px' }}
                          whileHover={{ 
                            scale: 1.15,
                            rotate: 2,
                            boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300,
                            damping: 20
                          }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <motion.h5 
                            className="d-flex justify-content-between border-bottom pb-2"
                            whileHover={{ 
                              borderBottomColor: '#FEA116',
                              transition: { duration: 0.2 }
                            }}
                          >
                            <motion.span
                              whileHover={{ 
                                color: '#921A40',
                                x: 3
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.name}
                            </motion.span>
                            <motion.span 
                              className="text-primary"
                              whileHover={{ 
                                scale: 1.1,
                                color: '#FEA116'
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.price}
                            </motion.span>
                          </motion.h5>
                          <motion.small 
                            className="fst-italic"
                            whileHover={{ 
                              color: '#666',
                              y: -1
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.description}
                          </motion.small>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPreview;
