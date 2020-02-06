import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ParksIndexContainer from './IndexComponents/ParksIndexContainer'
import ParksShowContainer from './ShowComponents/ParksShowContainer'
import TagsIndexContainer from './IndexComponents/TagsIndexContainer'
import ParkNewContainer from './FormsComponents/ParkNewContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ParksIndexContainer}/>
        <Route exact path="/parks" component={ParksIndexContainer}/>
        <Route exact path="/tags" component={TagsIndexContainer}/>
        <Route exact path="/parks/new" component={ParkNewContainer}/>
        <Route exact path="/parks/:id" component={ParksShowContainer}/>
        <Route exact path="/tags/:tag_id/parks" component={ParksIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
