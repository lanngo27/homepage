import React from 'react'
import './about.css'
import ME from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me-image">
          <img src={ME} alt="me" />
        </div>

        <div className="about__content">
          <p>
            I am a software engineer looking for a Full Stack developer
            position. I specialize in JavaScript and have professional
            experience working with C# and Python. I am enthusiastic about new
            technologies and love solving problems. Take a look at my work and
            get in touch!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
