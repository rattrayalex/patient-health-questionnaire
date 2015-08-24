import React from 'react/addons'
import Immutable from 'immutable'

import Option from './Option'
import NextDoneButton from './NextDoneButton'
import {} from './Question.css'

const { CSSTransitionGroup } = React.addons

// 1-indexed because user-facing in URL's (/quiz/question/0 would be confusing)
function _getQuestionByIdx(questions, idx) {
  return questions.get(idx-1)
}


export default class Question extends React.Component {
  render() {
    let { options, questions, params, dispatch } = this.props
    let question = _getQuestionByIdx(questions, params.idx)

    let Options = options.map( (option) =>
      <Option option={option}
        question={question}
        dispatch={dispatch}
        key={option.get('value')}
      />
    )

    return (
      <div style={{position: 'relative'}}>
        <CSSTransitionGroup transitionName="question">
          <div key={params.idx}>
            <h4>{question.get('display')}</h4>
            {Options}
            <NextDoneButton
              questions={questions}
              question={question}
              params={params}
            />
          </div>
        </CSSTransitionGroup>
      </div>
    )
  }
}

Question.propTypes = {
  questions: React.PropTypes.instanceOf(Immutable.List).isRequired,
  options: React.PropTypes.instanceOf(Immutable.List).isRequired,
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
}
