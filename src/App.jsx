import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';
import Hero from '@sections/Hero';
import CoreMandate from '@sections/CoreMandate';
import Chronicle from '@sections/Chronicle';
import EventsDetail from '@sections/EventsDetail';
import Architects from '@sections/Architects';
import ResourceHub from '@sections/ResourceHub';

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
