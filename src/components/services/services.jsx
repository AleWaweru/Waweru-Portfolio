import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Mobile applications</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web applications</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>E-commerce websites</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Dashboard interfaces</p>
          </li>
        </ul>
      </article>

      {/* END OF UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web Developement</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Frontend Development</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Mobile Application.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web Applications</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Web Maintainance and Update</p>
          </li>
        </ul>
      </article>

      {/* END OF Web Developement */}

      <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Content Strategy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Social Media Management</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Blogging</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Copywriting for marketing materials, websites, advertisements, 
              social media posts, blog articles, product descriptions, and more</p>
          </li>
        </ul>
      </article>

      {/* END OF Content Creation */}

    </div>
  </section>
);

export default Services;
