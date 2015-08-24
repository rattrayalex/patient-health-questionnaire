import React from 'react'
import Immutable from 'immutable'
import { RouteHandler } from 'react-router'
import { Provider, connect } from 'react-redux'

import {} from './Base.css'  // tell webpack to import styles
import { rootSelector } from '../selectors'
import store from '../store'


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

//
class Base extends React.Component {
  render() {
    return (
      <div className='outer-wrapper'>
        <div className='page-wrapper'>

          <Header />

          <div className='page'>
            <RouteHandler {...this.props} />
          </div>

        </div>
      </div>
    )
  }
}

Base.propTypes = {
  questions: React.PropTypes.instanceOf(Immutable.List).isRequired,
  options: React.PropTypes.instanceOf(Immutable.List).isRequired,
  dispatch: React.PropTypes.func.isRequired,
}

export default connect(rootSelector)(Base)
