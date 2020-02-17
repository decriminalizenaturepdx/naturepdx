import { h } from 'preact'
import style from './styles.css'
import Logo from '../../../assets/imgs/logo.jpg'

const LogoSlogan = () => {
  return (
    <div class={style.root}>
      <img src={Logo} />
      <p>
        <h2>
          - It is an unalienable right to develop your own relationship with
          Nature
        </h2>
      </p>
    </div>
  )
}

export default LogoSlogan
