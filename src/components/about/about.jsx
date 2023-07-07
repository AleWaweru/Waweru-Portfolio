import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/image4.jpg';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">

      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="me" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>200+ WorldWide</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Fugiat, ex distinctio quae atque dolorum reiciendis iure,
          officia rerum adipisci illum quod blanditiis!
          Mollitia accusantium delectus animi saepe nisi! Iure, praesentium.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
);

export default About;
