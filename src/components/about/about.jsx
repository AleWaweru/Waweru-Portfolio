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
        My name is Alex Waweru, a highly skilled and ambitious software developer, 
        equipped with the latest technologies and a strong educational background. 
        With a bachelor's degree under my belt, I possess expertise in a wide array of programming languages and tools, including WordPress, HTML, CSS, Bootstrap, PHP, JavaScript, React JS, and REST APIs. My proficiency extends beyond coding as I also have valuable soft skills in SEO, 
        utilizing Google Console and Google Analytics effectively.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
);

export default About;
