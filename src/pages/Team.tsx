import React from 'react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Full Name', designation: 'Designation', image: '../assets/team-1.jpg' },
    { name: 'Full Name', designation: 'Designation', image: '../assets/team-2.jpg' },
    { name: 'Full Name', designation: 'Designation', image: '../assets/team-3.jpg' },
    { name: 'Full Name', designation: 'Designation', image: '../assets/team-4.jpg' }
  ];

  return (
    <>
      {/* Page Header */}
        <div className="w-100 py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={member.image} alt={member.name} />
                  </div>
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.designation}</small>
                  <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
