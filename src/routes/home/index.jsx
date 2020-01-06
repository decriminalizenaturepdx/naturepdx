import { h } from 'preact'
import style from './style'
import SignUpForm from '../../components/sign-up-form'

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <SignUpForm />
  </div>
)

export default Home
