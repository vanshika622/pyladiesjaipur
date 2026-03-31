import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreMandate from './components/CoreMandate';
import Chronicle from './components/Chronicle';
import EventsDetail from './components/EventsDetail';
import Architects from './components/Architects';
import ResourceHub from './components/ResourceHub';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <main>
        <Hero />
        <CoreMandate />
        <EventsDetail />
        <Chronicle />
        <Architects />
        <ResourceHub />
      </main>
      <Footer />
    </div>
  );
}

export default App;
