import React from 'react'
import './styles.css'

const MissionStatement = () => {
  return (
    <div className="mission-statement">
      <h3>Mission Statement</h3>
      <div>
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
          <li className="nav-item">
            <a
              className="link"
              target="_blank"
              href="https://www.portlandoregon.gov/auditor/article/745466"
              rel="noopener noreferrer"
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
