import { NEW_DATA,
    UPDATE_SPINNER,
    CLEAR_GRID,
    RESET_SAMPLE_PUZZLE,
    RETRIEVE_SOLUTION_STARTING,
    RETRIEVE_SOLUTION_SUCCESS,
    RETRIEVE_PUZZLE_STARTING,
    RETRIEVE_PUZZLE_SUCCESS } from '../actions/ActionConstants'; 

//initial state
var puzzleData = {
    showSpinner: false,
    fetchPuzzleStarted: false
}

export function puzzleDataReducer(state = puzzleData, action) {
    console.log("puzzleDataReducer is handling: " + action.type);

    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return Object.assign( {},{ labelValue : action.payload } );

        case RETRIEVE_PUZZLE_STARTING:
            return {
                ...state,
                fetchPuzzleStarted: true
            }

        case RESET_SAMPLE_PUZZLE:
        case CLEAR_GRID:
        case NEW_DATA:
            return { ...state, 
                showSpinner: "false",
                grid: action.grid,
                puzzleId: action.puzzleId,
                puzzleDifficulty: action.puzzleDifficulty
             };

        case RETRIEVE_SOLUTION_SUCCESS:
            var newData = [];

            for(var row in action.payload.data){
                console.log("row: " + JSON.stringify(action.payload.data[row]));
                newData[row] = action.payload.data[row].map( (currentValue) => ( { value: currentValue, initialGiven: false } ) );
            }
            return { ...state, 
                grid : newData,
                showSpinner : "false",
                fetchPuzzleStarted: false
            };

        case RETRIEVE_PUZZLE_SUCCESS:
            var newData = [];

            for(var row in action.payload.data){
                console.log("row: " + JSON.stringify(action.payload.data[row]));
                newData[row] = action.payload.data[row].map( (currentValue) => ( { value: currentValue, initialGiven: false } ) );
            }
            return { ...state, 
                grid : newData,
                showSpinner : "false",
                puzzleId: action.payload.puzzleId,
                puzzleDifficulty: action.payload.puzzleDifficulty
            };

        case 'ERROR' :
            return{ ...state, message : action.message};

        case 'UPDATE_SPINNER' :
            return { ...state, showSpinner : action.showSpinner };

        default:
            return state;
    }
}