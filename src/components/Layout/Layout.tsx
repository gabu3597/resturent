import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollEffects from '../Utils/ScrollEffects';

const Layout: React.FC = () => {
  return (
    <div className="bg-white p-0">
      <ScrollEffects />
      {/* Spinner */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {/* Header */}
      <div className="position-relative p-0">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Layout;
