import { combineReducers } from 'redux'

import { puzzleDataReducer } from './puzzleReducer'

const rootReducer = combineReducers({
  puzzle: puzzleDataReducer,
})

export default rootReducer