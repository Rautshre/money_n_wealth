import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Login from './views/login'
import Blog from './views/blog'
import NotFound from './views/not-found' // Only default import

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Blog} exact path="/blog" />
        <Route component={NotFound} exact path="/not-found" />
        <Route component={NotFound} /> {/* Catch-all route */}
        <Redirect to="/not-found" />   {/* Redirect to valid path */}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
