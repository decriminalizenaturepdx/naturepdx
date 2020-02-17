import { h } from 'preact'
import style from './style'
import SignUpForm from '../../components/sign-up-form'
import MissionStatement from '../../components/mission-statement'
import MushroomCarousel from '../../components/mushroom-carousel'
import MediaQuery from 'react-responsive/src/Component'
import base from '../../style/base.css'
import LogoSlogan from '../../components/logo-slogan'

const Home = () => {
  const renderContent = () => (
    <>
      <LogoSlogan />
      <MissionStatement />
      <MushroomCarousel />
      <SignUpForm />
    </>
  )

  return (
    <div className={style.root}>
      <MediaQuery query='(max-device-width: 768px)'>
        {renderContent()}
      </MediaQuery>
      <MediaQuery query='(min-device-width: 769px)'>
        <div class={style.wrapper}>{renderContent()}</div>
      </MediaQuery>
    </div>
  )
}

export default Home
