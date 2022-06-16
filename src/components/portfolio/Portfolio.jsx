import React from 'react'
import './portfolio.css'
import LibraryGraphQL from '../../assets/LibraryGraphQL.png'
import Bloglist from '../../assets/Bloglist.png'
import Library from '../../assets/Library.png'
import Calculator from '../../assets/Calculator.png'
import SketchingApp from '../../assets/SketchingApp.png'
import RockPaperScissors from '../../assets/RockPaperScissors.png'

const data = [
  {
    id: 1,
    image: LibraryGraphQL,
    title: 'Library GraphQL App',
    github: 'https://github.com/lanngo27/library-graphql',
    demo: 'https://limitless-temple-76220.herokuapp.com/',
    tech: 'React, MongoDB, GraphQL, JWT'
  },
  {
    id: 2,
    image: Bloglist,
    title: 'Bloglist App',
    github: 'https://github.com/lanngo27/bloglist',
    demo: 'https://boiling-savannah-26849.herokuapp.com/',
    tech: 'React, MongoDB, Express, JWT, Redux'
  },
  {
    id: 3,
    image: Library,
    title: 'Simple Library',
    github: 'https://github.com/lanngo27/library',
    demo: 'https://lanngo27.github.io/library/',
    tech: 'Javascript, HTML, CSS'
  },
  {
    id: 4,
    image: Calculator,
    title: 'Calculator',
    github: 'https://github.com/lanngo27/calculator',
    demo: 'https://lanngo27.github.io/calculator/',
    tech: 'Javascript, HTML, CSS'
  },
  {
    id: 5,
    image: SketchingApp,
    title: 'Sketching App',
    github: 'https://github.com/lanngo27/Etch-A-Sketch',
    demo: 'https://lanngo27.github.io/Etch-A-Sketch/',
    tech: 'Javascript, HTML, CSS'
  },
  {
    id: 5,
    image: RockPaperScissors,
    title: 'Rock Paper Scissors Game',
    github: 'https://github.com/lanngo27/rock-paper-scissors',
    demo: 'https://lanngo27.github.io/rock-paper-scissors/',
    tech: 'Javascript, HTML, CSS'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, tech }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <small className="text-light">{tech}</small>
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
