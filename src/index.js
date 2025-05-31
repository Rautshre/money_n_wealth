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
import ChatbotWidget from './components/ChatbotWidget';
import Insurance from './views/Insurance';
import LearningPlatform from './views/LearningPlatform';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Login} exact path="/login" />
          <Route component={Blog} exact path="/blog" />
          <Route component={NotFound} exact path="/not-found" />
          <Route exact path="/insurance" component={Insurance} />
          <Route path="/learning-platform" component={LearningPlatform} />
          <Route component={NotFound} /> {/* Catch-all route */}
          <Redirect to="/not-found" />   {/* Redirect to valid path */}
        </Switch>
        <ChatbotWidget />
      </>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
