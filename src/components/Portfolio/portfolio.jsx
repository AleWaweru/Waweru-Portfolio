import React from 'react';
import './portfolio.css';

import SpaceIMG from '../../assets/spacehub.png';
import CryptoIMG from '../../assets/crypto.png';
import CalcIMG from '../../assets/Calc.png';
import TodoIMG from '../../assets/Todo.png';
import BookIMG from '../../assets/bookstore.png';
import PortIMG from '../../assets/portfolio.png';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: SpaceIMG,
      title: 'Space Travel-Hub',
      github: 'https://github.com/AleWaweru/Space-Travelers-Hub',
      demo: 'https://space-travel-594o.onrender.com',
    },

    {
      id: 2,
      image: CryptoIMG,
      title: 'Crptopanel',
      github: 'https://github.com/AleWaweru/metric-webApp-cryptoPanel',
      demo: 'https://cryptopanel.onrender.com/Cryptopanel',
    },

    {
      id: 3,
      image: CalcIMG,
      title: 'Math Magicians',
      github: 'https://github.com/AleWaweru/Math-Magicians',
      demo: 'https://math-magician-rx0g.onrender.com/',
    },

    {
      id: 4,
      image: TodoIMG,
      title: 'Todo-List',
      github: 'https://github.com/AleWaweru/TODO-LIST',
      demo: 'https://alewaweru.github.io/TODO-LIST/dist/',
    },
    {
      id: 5,
      image: BookIMG,
      title: 'Bookstore',
      github: 'https://github.com/AleWaweru/Bookstore',
      demo: 'https://book-store-fwot.onrender.com/',
    },
    {
      id: 6,
      image: PortIMG,
      title: 'Portfolio',
      github: 'https://github.com/AleWaweru/Waweru-Portfolio',
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
