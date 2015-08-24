import React from 'react'
import Router from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import store from './store'
import actions from './actions'


// init
Router.run(routes, Router.HashLocation, (Root, routeState) => {
  React.render(
    // Provide the Redux store.
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    // ref: https://rackt.github.io/redux/docs/basics/ExampleTodoList.html
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.body
  )
  // not actually used, but this triggers a re-render.
  // TODO: find more elegant solution,
  // or wait for https://github.com/acdlite/redux-react-router
  // to be released.
  store.dispatch({
    type: actions.ROUTE_CHANGED,
    route: routeState
  })
})
