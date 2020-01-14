import { h } from 'preact'
import { useState } from 'preact/hooks'

const MissionStatement = () => {
  const [showMore, setShoreMore] = useState(false)
  const onReadMoreOrLess = () => {
    setShoreMore(!showMore)
  }

  return (
  <div>
      <h3 className='bd-content-title'>Mission Statement</h3>
      <div className='lead'>
        Decriminalize Nature Portland is a cadre of Earth activists who are
        working to decriminalize medicinal plants and fungi that are schedule 1
        under arbitrary federal law.
      </div>
      {!showMore && <div>
        <button type="button" className="btn btn-link" onClick={onReadMoreOrLess}>Read more</button>
      </div>}
      {showMore && <div>
        <div className='lead'>
          We are currently circulating for the initiative petition
          "Decriminalization of Natural Psychedelics" (PDX02) intended for the
          2020 ballot for the city of Portland Oregon
        </div>
        <div>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="https://www.portlandoregon.gov/auditor/article/745466">Election Ballot</a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-link" onClick={onReadMoreOrLess}>Read less</button>
      </div>}
  </div>
)}

export default MissionStatement
