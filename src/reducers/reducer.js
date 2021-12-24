import { combineReducers } from 'redux'

import { puzzleDataReducer } from './puzzleReducer'
import { controlsReducer } from './controlsReducer'

const rootReducer = combineReducers({
  puzzle: puzzleDataReducer,
  controls: controlsReducer
})

export default rootReducer