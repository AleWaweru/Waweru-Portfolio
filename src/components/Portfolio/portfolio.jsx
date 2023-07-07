import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/image5.jpg';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },

    {
      id: 2,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },

    {
      id: 3,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },

    {
      id: 4,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 5,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },
    {
      id: 6,
      image: IMG1,
      title: 'Space Travel-Hub',
      github: 'https://github.com',
      demo: 'https://dribbble.com/Alien_pixels',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({
          id, image, title, github, demo,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))
      }
      </div>
    </section>
  );
};

export default Portfolio;
