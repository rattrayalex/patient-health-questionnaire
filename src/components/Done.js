import React from 'react'
import { Navigation } from 'react-router'
import Immutable from 'immutable'


class TherapistProfile extends React.Component {
  render() {
    let { img_src, name, location } = this.props
    return (
      <div className="col-sm-4">
        <center>
          <img src={img_src} alt={name} className="img-circle img-thumbnail" />
          <h4>{name}</h4>
          <p>{location}</p>
          <button type='button' className='btn btn-info'>
            Contact
          </button>
          <br />
          <hr className='visible-xs' />
        </center>
      </div>
    )
  }
}

class SeekHelp extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <center>
          <h4>Want help?</h4>
          <p>These Therapists are here for you:</p>
        </center>
        <div className="row">
          <TherapistProfile
            name="Sarah Rattray"
            img_src="/images/Sarah.jpg"
            location="Seattle, WA"
          />
          <TherapistProfile
            name="Garry Oppenheimer"
            img_src="/images/Garry.jpg"
            location="Bellevue, WA"
          />
          <TherapistProfile
            name="Genae Smith"
            img_src="/images/Genae.jpg"
            location="Redmond, WA"
          />
        </div>
      </div>
    )
  }
}


export default React.createClass({
  // create the non-ES6 way b/c need the Navigation mixin's transitionTo
  mixins: [Navigation],
  propTypes: {
    score: React.PropTypes.number.isRequired,
    diagnosis: React.PropTypes.string.isRequired,
    questions: React.PropTypes.instanceOf(Immutable.List).isRequired,
  },

  componentWillMount() {
    let { questions } = this.props
    questions.forEach( (q, idx) => {
      if ( q.get('selected') === null ) {
        // if they haven't checked a button on a page,
        // go back to that page. (note the 1-indexing)
        // TODO: display to user, clean up 1-indexing.
        this.transitionTo('question', {idx: idx+1})
        return false
      }
    })
  },
  render() {
    let { score, diagnosis } = this.props
    return (
      <div>
        <center>
          <h3>Questionnaire Complete</h3>
          <hr />
        </center>
        <p className="lead">
          You scored <strong>{score}</strong> out of 27.
        </p>
        <p className="lead">
          This may indicate a Depression Severity
          of <strong>{diagnosis}</strong>.
        </p>
        { ( score >= 10 )  // moderate or higher
          ? <SeekHelp />
          : null
        }
      </div>
    )
  }
})