import { h } from 'preact';
import style from './style';
import SignUpForm from '../../components/sign-up-form';
import Carousel from '../../components/carousel';
import MissionStatement from '../../components/mission-statement';

const Home = () => (
  <div class={style.home}>
    <MissionStatement />
    <Carousel />
    <SignUpForm />
  </div>
)

export default Home
