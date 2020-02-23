import React from 'react'
import Logo from '../../assets/imgs/logo.jpg'
import './styles.css'

const LogoSlogan = () => {
  return (
    <div className="logo-slogan">
      <img src={Logo} alt="Logo" />
      <p>
        <h2>
          - It is an unalienable right to develop your own relationship with Nature
        </h2>
      </p>
    </div>
  )
}

export default LogoSlogan
