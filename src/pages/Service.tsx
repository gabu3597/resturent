import React from 'react';
import { Link } from 'react-router-dom';

const Service: React.FC = () => {
  const services = [
    {
      icon: 'fa-user-tie',
      title: 'Master Chefs',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      delay: '0.1s'
    },
    {
      icon: 'fa-utensils',
      title: 'Quality Food',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      delay: '0.3s'
    },
    {
      icon: 'fa-cart-plus',
      title: 'Online Order',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      delay: '0.5s'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Service',
      description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      delay: '0.7s'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={service.delay}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-birthday-cake text-primary mb-4"></i>
                  <h5>Event Catering</h5>
                  <p>Professional catering services for all your special events and celebrations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4"></i>
                  <h5>Home Delivery</h5>
                  <p>Fast and reliable home delivery service to bring our delicious food to your doorstep</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-wine-glass-alt text-primary mb-4"></i>
                  <h5>Private Dining</h5>
                  <p>Exclusive private dining rooms for intimate gatherings and business meetings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
