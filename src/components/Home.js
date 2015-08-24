import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h3>Take a Quiz</h3>
          <p>
            to see if you suffer
            from clinical depression!
          </p>
          <Link to='quiz' className='btn btn-lg btn-info'>
            Take the Quiz
            &raquo;
          </Link>
        </center>
      </div>
    )
  }
}
