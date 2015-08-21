import React from 'react'
import { Route, DefaultRoute } from 'react-router'

import Base from './components/Base'
import Home from './components/Home'


export default (
  <Route path='/' handler={Base} >
    <DefaultRoute handler={Home} />
  </Route>
)
