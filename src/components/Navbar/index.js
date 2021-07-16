// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <div className="container3">
    <div>
      <ul className="list">
        <li className="spacing">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="spacing">
          <Link className="nav-link" to="/reports">
            Reports
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav-container">
      <img src="" className="profile-img" alt="profilePic" />
      <p className="nav-link name">Micheal</p>
      <button type="button" className="logoutButton">
        logout
      </button>
    </div>
  </div>
)

export default Navbar
