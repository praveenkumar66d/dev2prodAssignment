import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Reports from './components/Reports'
import Completed from './components/Completed'

import './App.css'

const App = () => (
  <div className="app-card ">
    <Navbar />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/reports/completed" component={Completed} />
      </Switch>
    </div>
  </div>
)

export default App
