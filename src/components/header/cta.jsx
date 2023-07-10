import React from 'react';
import CV from '../../assets/ALEX_WAWERU_RESUME.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">DownLoad CV</a>
    <a href="#contact" className="btn btn-primary">Let's talk</a>
  </div>
);

export default CTA;
