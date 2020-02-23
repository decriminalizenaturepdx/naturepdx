import React  from 'react'
import SocialLinks from '../social-links'
import './style.css'

const Header = () => {

  return (
    <div className="header">
        <div className="wrapper">
          <h1>Let'em Grow</h1>
          <SocialLinks />
        </div>
    </div>
  )
}

export default Header
