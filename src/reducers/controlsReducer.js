import { TOGGLE_PENCIL, PENCIL_SELECTION_CHANGED } from '../actions/ActionConstants';

//initial state
var control = {
    pencilControlSelected: false,
    selectedPencilValue: null
}

export function controlsReducer(state = control, action) {
    console.log('controlsReducer is handling action type: ' + action.type );
    switch (action.type) {
        case TOGGLE_PENCIL:
            return {
                ...state,
                pencilControlSelected: !state.pencilControlSelected
            };
        case PENCIL_SELECTION_CHANGED:
            return {
                ...state,
                selectedPencilValue: action.payload
            }
       default:
            return state;
    }
}