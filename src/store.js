import Immutable from 'immutable'
import { createStore } from 'redux'

import actions from './actions'


const initialState = Immutable.fromJS({
  options: [
    {
      value: 0,
      display: 'Not at all',
    },
    {
      value: 1,
      display: 'Several days',
    },
    {
      value: 2,
      display: 'More than half the days in the week',
    },
    {
      value: 3,
      display: 'Nearly every day',
    },
  ],
  questions: [
    {
      value: 'interest',
      display: 'Little interest or pleasure in doing things?',
      selected: null,
    },
    {
      value: 'down',
      display: 'Feeling down, depressed, or hopeless?',
      selected: null,
    },
    {
      value: 'sleep',
      display: 'Trouble falling or staying asleep, or sleeping too much?',
      selected: null,
    },
    {
      value: 'tired',
      display: 'Feeling tired or having little energy?',
      selected: null,
    },
    {
      value: 'appetite',
      display: 'Poor appetite or overeating?',
      selected: null,
    },
    {
      value: 'esteem',
      display: 'Feeling bad about yourself -' +
        ' or that you are a failure or have let yourself or your family down?',
      selected: null,
    },
    {
      value: 'concentration',
      display: 'Trouble concentrating on things, ' +
        'such as reading the newspaper or watching television?',
      selected: null,
    },
    {
      value: 'fidgety',
      display: 'Moving or speaking so slowly that other people ' +
        'could have noticed? \n Or the opposite -' +
        ' being so fidgety or restless ' +
        'that you have been moving around a lot more than usual?',
      selected: null,
    },
    {
      value: 'harm',
      display: 'Thoughts that you would be better off dead, ' +
        'or of hurting yourself in some way?',
      selected: null,
    },
  ],
  severities: [
    {
      min: 0,
      max: 4,
      display: 'none',
    },
    {
      min: 5,
      max: 9,
      display: 'mild',
    },
    {
      min: 10,
      max: 14,
      display: 'moderate',
    },
    {
      min: 15,
      max: 19,
      display: 'moderately severe',
    },
    {
      min: 20,
      max: 27,
      display: 'severe',
    },
  ],
  route: null
})


export default createStore( (state=initialState, action) => {
  switch (action.type) {
  case actions.RADIO_CLICKED:
    let { question, option } = action
    let question_idx = state.get('questions').indexOf(question)

    return state.setIn(
      ['questions', question_idx, 'selected'],
      option.get('value')
    )
  case actions.ROUTE_CHANGED:
    // currently not used, just for triggering render.
    return state.set('route', action.route)
  }
  return state
})
