import { h } from 'preact'
import styles from './styles.css'

const MissionStatement = () => {
  return (
    <div class={styles.component}>
      <h3 className='bd-content-title'>Mission Statement</h3>
      <div className='lead'>
        Decriminalize Nature Portland is a cadre of Earth activists who are
        working to decriminalize medicinal plants and fungi that are schedule 1
        under arbitrary federal law.
      </div>
      <p>
        We are currently circulating for the initiative petition
        "Decriminalization of Natural Psychedelics" (PDX02) intended for the
        2020 ballot for the city of Portland Oregon
      </p>
      <div>
        <ul>
          <li className='nav-item'>
            <a
              class={styles.link}
              target='_blank'
              href='https://www.portlandoregon.gov/auditor/article/745466'
            >
              Election Ballot
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MissionStatement
