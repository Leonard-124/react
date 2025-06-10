import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';




const skips = [
  { id: 17933, size: 4, hire_period_days: 14, price_before_vat: 278, vat: 20, postcode: "NR32", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17934, size: 6, hire_period_days: 14, price_before_vat: 305, vat: 20, postcode: "NR32", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17935, size: 8, hire_period_days: 14, price_before_vat: 375, vat: 20, postcode: "NR32", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17936, size: 10, hire_period_days: 14, price_before_vat: 400, vat: 20, postcode: "NR32", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17937, size: 12, hire_period_days: 14, price_before_vat: 439, vat: 20, postcode: "NR32", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17938, size: 14, hire_period_days: 14, price_before_vat: 470, vat: 20, postcode: "NR32", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17939, size: 16, hire_period_days: 14, price_before_vat: 496, vat: 20, postcode: "NR32", allowed_on_road: false, allows_heavy_waste: false },
  { id: 15124, size: 20, hire_period_days: 14, price_before_vat: 992, vat: 20, postcode: "NR32", transport_cost: 248, per_tonne_cost: 248, allowed_on_road: false, allows_heavy_waste: true },
  { id: 15125, size: 40, hire_period_days: 14, price_before_vat: 877, vat: 0, postcode: "NR32", transport_cost: 248, per_tonne_cost: 248, allowed_on_road: false, allows_heavy_waste: false },
];

function Navbar({ activeStep }) {
  const steps = ["Postcode", "Waste Type", "Select Skip", "Permit Check", "Choose Date", "Payment"];
  return (
    <nav className="navbar">
      {steps.map((step) => (
        <span key={step} className={`navbar-step ${step === activeStep ? 'active-step' : ''}`}>{step}</span>
      ))}
    </nav>
  );
}

function SkipCard({ skip, isSelected, onSelect }) {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <img src={`/images/skip${skip.size}.jpg`} alt={`Skip ${skip.size}`} className="card-image" />
      <div className="card-content">
        <h2>{skip.size} Yard Skip</h2>
        <p><strong>Hire Period:</strong> {skip.hire_period_days} days</p>
        <p><strong>Price:</strong> £{skip.price_before_vat} + VAT = £{totalPrice}</p>
        <p>{skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road"}</p>
        <p>{skip.allows_heavy_waste ? "Allows Heavy Waste" : "No Heavy Waste"}</p>
        <button className="card-button">{isSelected ? 'Selected' : 'Select this Skip'}</button>
      </div>
    </div>
  );
}
function App() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  return (
    <div>
      <Navbar />
      <main className="main">
        <h1 className="main-title">Choose Your Skip</h1>
        <div className="card-grid">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={skip.id === selectedSkipId}
              onSelect={() => setSelectedSkipId(skip.id)}
            />
          ))}
        </div>
      </main>
      <Footer selectedSkip={skips.find(skip => skip.id === selectedSkipId)} />
    </div>
  
  );
}

export default App;
