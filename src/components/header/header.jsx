import { h } from 'preact'
import MediaQuery from 'react-responsive/src/Component'
import SocialLinks from '../social-links'
import style from './style.css'

const Header = () => {
  const renderContent = () => (
    <>
      <h1>Nature PDX</h1>
      <SocialLinks />
    </>
  )

  return (
    <header class={style.header}>
      <MediaQuery query='(max-device-width: 768px)'>
        {renderContent()}
      </MediaQuery>
      <MediaQuery query='(min-device-width: 769px)'>
        <div class={style.wrapper}>{renderContent()}</div>
      </MediaQuery>
    </header>
  )
}

export default Header
