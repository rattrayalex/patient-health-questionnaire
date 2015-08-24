import { createSelector } from 'reselect'


const _questions = (state) => state.get('questions')
const _options = (state) => state.get('options')
const _route = (state) => state.get('route')
const _severities = (state) => state.get('severities')

const _score = createSelector(
  [_questions],
  (questions) =>
    questions.reduce(
      (acc, val, key) => acc + parseInt(val.get('selected') || 0)
    , 0)
)

const _diagnosis = createSelector(
  [_score, _severities],
  (score, severities) =>
    severities
      .filter(sev => (
        ( sev.get('min') <= score )
        &&
        ( sev.get('max') >= score )
      ))
      .map(sev => sev.get('display'))
      .first()
)


// TODO: split this up
export const rootSelector = createSelector(
  [_questions, _options, _route, _score, _diagnosis],
  (questions, options, route, score, diagnosis) => ({
    questions,
    options,
    route,
    score,
    diagnosis,
  })
)
