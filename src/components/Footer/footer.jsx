import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => (
  <footer>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="footer__logo">WAWERU</a>

    <ul className="permalinks">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/alex.nganga.792"><FaFacebookF /></a>
      <a href="https://www.linkedin.com/in/alewaweru/"><AiFillLinkedin /></a>
      <a href="https://twitter.com/ngashalex"><IoLogoTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; WAWERU Portfolio. All rights reserved.</small>
    </div>

  </footer>
);

export default Footer;
