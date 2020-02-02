import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'
import App from '../app'

const Header = ({ path }) => (
  <header class={style.header}>
    <h1>Let'em Grow</h1>
    <nav>
      <Link activeClassName={style.active} href={path}>
        Home
      </Link>
      <Link activeClassName={style.active} href={`${path}profile`}>
        Me
      </Link>
      <Link activeClassName={style.active} href={`${path}profile/juan`}>
        Juan
      </Link>
    </nav>
  </header>
)

export default Header
