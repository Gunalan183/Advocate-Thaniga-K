import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DisclaimerModal from './components/DisclaimerModal';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App bg-black text-white min-h-screen overflow-x-hidden w-full">
          <Navbar />
          <main className="overflow-x-hidden w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <DisclaimerModal />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;