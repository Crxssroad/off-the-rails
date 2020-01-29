import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ParksIndexContainer from './ParksIndexContainer'
import ParksShowContainer from './ParksShowContainer'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ParksIndexContainer}/>
        <Route exact path="/parks" component={ParksIndexContainer}/>
        <Route exact path="/parks/:id" component={ParksShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
