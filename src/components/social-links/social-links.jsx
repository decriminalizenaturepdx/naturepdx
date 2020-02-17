import { h } from 'preact'
import styles from './styles.css'
import facebook from '../../../assets/imgs/facebook-64.png'
import instagram from '../../../assets/imgs/instagram-64.png'
import twitter from '../../../assets/imgs/twitter-64.png'

const Header = () => (
  <div class={styles.root}>
    <a
      class={styles.links}
      href='https://www.facebook.com/Decriminalize-Nature-Portland-1826297640855055/'
      target='_blank'
    >
      <img src={facebook} alt='Facebook page' />
    </a>
    <a
      class={styles.links}
      href='https://www.instagram.com/decriminalizenatureportland/'
      target='_blank'
    >
      <img src={instagram} alt='Instagram feed' />
    </a>
    <a
      class={styles.links}
      href='https://twitter.com/NaturePortland'
      target='_blank'
    >
      <img src={twitter} alt='Twitter feed' />
    </a>
  </div>
)

export default Header
