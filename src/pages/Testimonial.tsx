import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: 'Client Name',
      profession: 'Profession',
      image: '/img/testimonial-1.jpg',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: '/img/testimonial-2.jpg',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: '/img/testimonial-3.jpg',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: '/img/testimonial-4.jpg',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="row g-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                  <div className="testimonial-item bg-transparent border rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                    <p>{testimonial.text}</p>
                    <div className="d-flex align-items-center">
                      <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial.image} style={{width: '50px', height: '50px'}} alt={testimonial.name} />
                      <div className="ps-3">
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <small>{testimonial.profession}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
