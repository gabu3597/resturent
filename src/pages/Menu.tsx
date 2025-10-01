import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const menuItems = {
    breakfast: [
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-1.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-2.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-3.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-4.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-5.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-6.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-7.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' },
      { name: 'Chicken Burger', price: '$115', image: '../img/menu-8.jpg', description: 'Ipsum ipsum clita erat amet dolor justo diam' }
    ],
    lunch: [
      { name: 'Grilled Steak', price: '$125', image: '../img/menu-1.jpg', description: 'Delicious grilled steak with special sauce' },
      { name: 'Fish Fillet', price: '$120', image: '../img/menu-2.jpg', description: 'Fresh fish fillet with herbs and spices' },
      { name: 'Pasta Special', price: '$110', image: '../img/menu-3.jpg', description: 'Homemade pasta with rich tomato sauce' },
      { name: 'Chicken Caesar', price: '$105', image: '../img/menu-4.jpg', description: 'Classic caesar salad with grilled chicken' },
      { name: 'Beef Sandwich', price: '$115', image: '../img/menu-5.jpg', description: 'Tender beef sandwich with fresh vegetables' },
      { name: 'Seafood Platter', price: '$135', image: '../img/menu-6.jpg', description: 'Mixed seafood with special seasoning' }
    ],
    dinner: [
      { name: 'Beef Roast', price: '$135', image: '../img/menu-7.jpg', description: 'Tender beef roast with vegetables' },
      { name: 'Lamb Chops', price: '$140', image: '../img/menu-8.jpg', description: 'Juicy lamb chops with mint sauce' },
      { name: 'Lobster Thermidor', price: '$155', image: '../img/menu-1.jpg', description: 'Fresh lobster in creamy sauce' },
      { name: 'Duck Confit', price: '$145', image: '../img/menu-2.jpg', description: 'Slow-cooked duck with orange glaze' },
      { name: 'Wagyu Steak', price: '$165', image: '../img/menu-3.jpg', description: 'Premium wagyu beef cooked to perfection' },
      { name: 'Salmon Teriyaki', price: '$125', image: '../img/menu-4.jpg', description: 'Grilled salmon with teriyaki sauce' }
    ]
  };

  return (
    <>
      {/* Page Header */}
      <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === 'breakfast' ? 'active' : ''}`}
                  onClick={() => setActiveTab('breakfast')}
                  style={{border: 'none', background: 'none'}}
                >
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${activeTab === 'lunch' ? 'active' : ''}`}
                  onClick={() => setActiveTab('lunch')}
                  style={{border: 'none', background: 'none'}}
                >
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Lunch</h6>
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'dinner' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dinner')}
                  style={{border: 'none', background: 'none'}}
                >
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt={item.name} style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{item.name}</span>
                            <span className="text-primary">{item.price}</span>
                          </h5>
                          <small className="fst-italic">{item.description}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
