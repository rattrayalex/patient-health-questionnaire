import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import Base from './components/Base'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Done from './components/Done'
import Question from './components/Question'


export default (
  <Route path='/' handler={Base} >
    <DefaultRoute handler={Home} />
    <Route name='quiz/' path='quiz' handler={Quiz}>
      <Route name='question' path='question/:idx' handler={Question} />
      <Redirect from='/' to='question' params={{idx: 1}} />
      <Redirect from='*' to='question' params={{idx: 1}} />
    </Route>
    <Route name='done' path='done' handler={Done} />
  </Route>
)
