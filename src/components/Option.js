import React from 'react'
import Immutable from 'immutable'

import actions from '../actions'


export default class Option extends React.Component {

  _handleChange(e) {
    let { option, question, dispatch } = this.props
    dispatch({
      type: actions.RADIO_CLICKED,
      option,
      question,
    })
  }
  _isChecked() {
    let { option, question } = this.props
    return question.get('selected') === option.get('value')
  }

  render() {
    let { option, question } = this.props

    let id = `option-${question.get('value')}-${option.get('value')}`

    return (
      <div className="radio">
        <label htmlFor={id}>
          <input type="radio"
            id={id}
            name={question.get('value')}
            value={option.get('value')}
            onChange={this._handleChange.bind(this)}
            checked={this._isChecked()}
          />
          {option.get('display')}
        </label>
      </div>
    )
  }
}

Option.propTypes = {
  option: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  question: React.PropTypes.instanceOf(Immutable.Map).isRequired,
  dispatch: React.PropTypes.func.isRequired,
}
