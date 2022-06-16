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
            I am a software engineer looking for opportunities in both frontend
            and backend development. I am proficient in JavaScript, HTML, CSS
            and have in addition professional experience working with C# and
            Python. I am enthusiastic about new technologies and love solving
            problems. Take a look at my work and get in touch!
          </p>

          <div className="cta">
            <a
              href="https://drive.google.com/file/d/1TF6bwzbzMkNyjotbglhfowGcAno0X1dW/view?usp=sharing"
              download
              className="btn"
            >
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
