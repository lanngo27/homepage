import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://de.linkedin.com/in/lanngo279" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/lanngo27" target="blank">
        <BsGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
