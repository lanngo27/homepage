import React from 'react'
import './footer.css'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://de.linkedin.com/in/lanngo279">
          <RiLinkedinFill className="footer__socials-icon" />
        </a>
        <a href="https://github.com/lanngo27">
          <RiGithubFill className="footer__socials-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
