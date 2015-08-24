import React from 'react'
import Immutable from 'immutable'
import { RouteHandler, Link } from 'react-router'

import Question from './Question'
import { questionsSelector, optionsSelector } from '../selectors'


export default class Quiz extends React.Component {
  _handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div>
        <p className='lead'>
          Over the last two weeks,
          how often have you been bothered by...
        </p>
        <hr />
        <form onSubmit={this._handleSubmit}>
          <RouteHandler {...this.props} />
        </form>
      </div>
    )
  }
}

Quiz.propTypes = {
  questions: React.PropTypes.instanceOf(Immutable.List).isRequired,
  options: React.PropTypes.instanceOf(Immutable.List).isRequired,
  dispatch: React.PropTypes.func.isRequired,
}
