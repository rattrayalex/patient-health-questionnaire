import React from 'react'
import Immutable from 'immutable'
import { Link } from 'react-router'

export default class NextDoneButton extends React.Component {
  render() {
    let { params, questions, question } = this.props

    if ( !params.idx ) {
      return null
    }

    const disabled = (
      ( question.get('selected') !== null )
      ? false
      : true
    )

    if ( params.idx == questions.size ) {
      return (
        <Link to='done'
          disabled={disabled}
          className='btn btn-lg btn-info'
          >
          I'm Done
          &raquo;
        </Link>
      )
    }
    return (
      <Link to='question'
        disabled={disabled}
        params={{ idx: parseInt(params.idx) + 1 }}
        className='btn btn-lg btn-info'
        >
        Next
        &raquo;
      </Link>
    )
  }
}

NextDoneButton.propTypes = {
  questions: React.PropTypes.instanceOf(Immutable.List).isRequired,
  params: React.PropTypes.object.isRequired,
}
