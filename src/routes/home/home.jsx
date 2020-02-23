import React  from 'react'
import SignUpForm from '../../components/sign-up-form'
import MissionStatement from '../../components/mission-statement'
import MushroomCarousel from '../../components/mushroom-carousel'
import MediaQuery from 'react-responsive/src/Component'
import LogoSlogan from '../../components/logo-slogan'
import './style.css'

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
    <div className="home-root">
      <MediaQuery query='(max-device-width: 768px)'>
        {renderContent()}
      </MediaQuery>
      <MediaQuery query='(min-device-width: 769px)'>
        <div className="home-wrapper">{renderContent()}</div>
      </MediaQuery>
    </div>
  )
}

export default Home
