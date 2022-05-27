import React from 'react'
import './portfolio.css'
import Calculator from '../../assets/Calculator.png'

const data = [
  {
    id: 1,
    image: Calculator,
    title: 'Simple Calculator',
    github: 'https://github.com/lanngo27/calculator',
    demo: 'https://lanngo27.github.io/calculator/'
  },
  {
    id: 2,
    image: Calculator,
    title: 'Simple Calculator',
    github: 'https://github.com/lanngo27/calculator',
    demo: 'https://lanngo27.github.io/calculator/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
