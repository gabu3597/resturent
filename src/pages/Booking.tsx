import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    people: '1',
    request: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', formData);
    alert('Booking request sent successfully!');
    setFormData({ name: '', email: '', datetime: '', people: '1', request: '' });
  };

  return (
    <>
      {/* Page Header */}
      <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
              <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
              <h1 className="text-white mb-4">Book A Table Online</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating date" id="date3" data-target-input="nearest">
                      <input 
                        type="datetime-local" 
                        className="form-control" 
                        id="datetime" 
                        name="datetime"
                        placeholder="Date & Time"
                        value={formData.datetime}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select 
                        className="form-select" 
                        id="people"
                        name="people"
                        value={formData.people}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="1">People 1</option>
                        <option value="2">People 2</option>
                        <option value="3">People 3</option>
                        <option value="4">People 4</option>
                        <option value="5">People 5</option>
                        <option value="6">People 6</option>
                        <option value="7">People 7</option>
                        <option value="8">People 8</option>
                      </select>
                      <label htmlFor="people">No Of People</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control" 
                        placeholder="Special Request" 
                        id="request" 
                        name="request"
                        style={{height: '100px'}}
                        value={formData.request}
                        onChange={handleInputChange}
                      ></textarea>
                      <label htmlFor="request">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">Youtube Video</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
