//initial state
var control = {
    pencilControlSelected: false
}

export function controlsReducer(state = control, action) {
    switch (action.type) {
        case 'TOGGLE_PENCIL':
            return {
                ...state,
                pencilControlSelected: !state.pencilControlSelected
            };

       default:
            return state;
    }
}