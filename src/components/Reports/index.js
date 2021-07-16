import {Link} from 'react-router-dom'
import './index.css'

const Reports = () => (
  <div>
    <ul className="reports-container">
      <li>
        <Link className="links" to="/ongoing">
          Ongoing
        </Link>
      </li>
      <li>
        <Link className="links" to="/completed">
          Completed
        </Link>
      </li>
    </ul>
  </div>
)

export default Reports
