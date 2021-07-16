import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="user_profile">
          <div className="about-user">
            <h1 className="greeting">Hello Micheal!</h1>
            <p className="description">
              Empowering test diagnostics with AI,test your result below
            </p>
            <button type="button" className="examine-button">
              Examine Test
            </button>
          </div>
          <div className="recent-tests">
            <h1 className="recent-heading">Your recent Tests</h1>
            <ul className="list-headings">
              <li className="item">test name</li>
              <li className="item">age</li>
              <li className="item">location</li>
              <li className="item">slot timing</li>
              <li className="item">X-Ray date</li>
            </ul>
            <ul className="recent-test-data">
              <li className="item">Mark</li>
              <li className="item">26</li>
              <li className="item">hyderabad</li>
              <li className="item">Tue,17</li>
              <li className="item">Aug 21</li>
            </ul>
            <ul className="recent-test-data">
              <li className="item">Mark</li>
              <li className="item">26</li>
              <li className="item">hyderabad</li>
              <li className="item">Tue,17</li>
              <li className="item">Aug 21</li>
            </ul>
            <ul className="recent-test-data">
              <li className="item">Mark</li>
              <li className="item">26</li>
              <li className="item">hyderabad</li>
              <li className="item">Tue,17</li>
              <li className="item">Aug 21</li>
            </ul>
          </div>
        </div>
        <div className="activities-container">
          <h1 className="your-activies-heading">Your Activities</h1>
        </div>
      </div>
    )
  }
}

export default Home
