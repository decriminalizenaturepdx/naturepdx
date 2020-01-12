import { h } from 'preact'
import style from './style'
import SignUpForm from '../../components/sign-up-form'
import MissionStatement from '../../components/mission-statement'

const Home = () => (
  <div class={style.home}>
    <MissionStatement />
    <SignUpForm />
  </div>
)

export default Home
