import React from 'react'
import Genres from './components/Genres'
import GenreDetail from './components/GenreDetail'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/genre/:id">
          <GenreDetail/>
        </Route>
        <Route path="/">
          <Genres />
        </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App
