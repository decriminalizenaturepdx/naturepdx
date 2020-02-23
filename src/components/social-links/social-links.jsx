import React  from 'react';
import './styles.css'
import facebook from '../../assets/imgs/facebook-64.png'
import instagram from '../../assets/imgs/instagram-64.png'
import twitter from '../../assets/imgs/twitter-64.png'

const SocialLinks = () => (
  <div className="SocialLinks">
    <a
      class="SocialLink"
      href="https://www.facebook.com/Decriminalize-Nature-Portland-1826297640855055/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt='Facebook page' />
    </a>
    <a
      class="SocialLink"
      href="https://www.instagram.com/decriminalizenatureportland/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagram} alt="Instagram feed" />
    </a>
    <a
      class="SocialLink"
      href='https://twitter.com/NaturePortland'
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitter} alt="Twitter feed" />
    </a>
  </div>
)

export default SocialLinks
