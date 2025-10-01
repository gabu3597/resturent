import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
