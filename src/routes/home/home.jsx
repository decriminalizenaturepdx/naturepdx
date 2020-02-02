import { h } from 'preact'
import style from './style'
import SignUpForm from '../../components/sign-up-form'
import MissionStatement from '../../components/mission-statement'
import MushroomCarousel from '../../components/mushroom-carousel'

const Home = () => (
  <div class={style.home}>
    <MissionStatement />
    <MushroomCarousel />
    <SignUpForm />
  </div>
)

export default Home
