import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ParksIndexContainer from './ParksIndexContainer'
<<<<<<< HEAD
import TagsIndexContainer from './TagsIndexContainer'
=======
import ParksShowContainer from './ParksShowContainer'
>>>>>>> 51ea1ca7f3e27a91b35891b3ab330e07b375c877
import ParkNewContainer from './ParkNewContainer'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ParksIndexContainer}/>
        <Route exact path="/parks" component={ParksIndexContainer}/>
        <Route exact path="/tags" component={TagsIndexContainer}/>
        <Route exact path="/parks/new" component={ParkNewContainer}/>
<<<<<<< HEAD
        <Route exact path="/tags/:tag_id/parks" component={ParksIndexContainer}/>
=======
        <Route exact path="/parks/:id" component={ParksShowContainer}/>
>>>>>>> 51ea1ca7f3e27a91b35891b3ab330e07b375c877
      </Switch>
    </BrowserRouter>
  )
}

export default App
