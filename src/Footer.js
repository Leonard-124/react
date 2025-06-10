
import React from 'react';

function Footer({ selectedSkip }) {
  if (!selectedSkip) return null;

  const totalPrice = (selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2);

  return (
    <footer className="footer">
      <p className="footer-note">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </p>
      <div className="footer-details">
        <div className="footer-skip-info">
          <h3>{selectedSkip.size} Yard Skip</h3>
        </div>
        <div className="footer-price-info">
          <span className="footer-price">&pound;{totalPrice}</span>
          <span className="footer-days">{selectedSkip.hire_period_days} days</span>
        </div>
      </div>
      <div className="footer-buttons">
        <button className="footer-btn back">Back</button>
        <button className="footer-btn continue">Continue</button>
      </div>
    </footer>
  );
}

export default Footer;