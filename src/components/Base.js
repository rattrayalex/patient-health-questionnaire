import React from 'react'
import { RouteHandler } from 'react-router'

import {} from './Base.css'


class Header extends React.Component {
  render() {
    return (
      <center>
        <h2>
          Patient Health Questionnaire
          &nbsp;
          <small>(PHQ-9)</small>
        </h2>
      </center>
    )
  }
}


export default class Base extends React.Component {
  render() {
    return (
      <div className='outer-wrapper'>
        <div className='page-wrapper'>

          <Header />

          <div className='page'>
            <RouteHandler />
          </div>

        </div>
      </div>
    )
  }
}
