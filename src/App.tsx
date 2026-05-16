import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AddOns from './components/AddOns';
import Hours from './components/Hours';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'service'>('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage('service');
    window.scrollTo(0, 0);
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    setSelectedService(null);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'service' && selectedService) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation onHomeClick={handleBackHome} />
        <ServiceDetail serviceId={selectedService} onBack={handleBackHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onHomeClick={handleBackHome} />
      <Hero />
      <About />
      <Services onServiceClick={handleServiceClick} />
      <AddOns />
      <Hours />
      <Footer />
    </div>
  );
}

export default App;
