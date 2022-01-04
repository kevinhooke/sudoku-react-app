import { NEW_DATA,
    UPDATE_SPINNER,
    CLEAR_GRID,
    RESET_SAMPLE_PUZZLE,
    RETRIEVE_SOLUTION_STARTING,
    RETRIEVE_SOLUTION_SUCCESS,
    RETRIEVE_PUZZLE_STARTING,
    RETRIEVE_PUZZLE_SUCCESS,
    PENCIL_UPDATE_FOR_SQUARE } from '../actions/ActionConstants'; 

//pencil marks initial state
let initialPencilMarks = [
    [
        [
            ["1", "2", "3"], 
            ["4", "5", "6"],
            ["7", "8", "9"],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

    [
        [
            ["1", "", "3"], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["4", "5", "6"],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
        [
            ["", "", ""], 
            ["", "", ""],
            ["", "", ""],
        ],
    ],

]

//initial state
var puzzleData = {
    showSpinner: false,
    fetchPuzzleStarted: false,
    pencilMarks: initialPencilMarks,
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
                pencilMarks: initialPencilMarks,
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

        case PENCIL_UPDATE_FOR_SQUARE:

            let updatedPencilGrid = state.pencilMarks.slice();
            //TODO
            let updatedGridForSquare = updatedPencilGrid[action.payload.row][action.payload.col];
            //to help with displaying the grid, the pencil grid values are split across 3 rows
            if(action.payload.value < 4){
                updatedGridForSquare[0][action.payload.value-1] = action.payload.value;
            }
            else if(action.payload.value > 3 && action.payload.value < 7){
                updatedGridForSquare[1][action.payload.value - 4] = action.payload.value;
            }
            else{
                updatedGridForSquare[2][action.payload.value - 7] = action.payload.value;
            }
            updatedPencilGrid[action.payload.row][action.payload.col] = updatedGridForSquare;
            return {
                ...state,
                pencilMarks: updatedPencilGrid,
            }
    

        case 'ERROR' :
            return{ ...state, message : action.message};

        case 'UPDATE_SPINNER' :
            return { ...state, showSpinner : action.showSpinner };

        default:
            return state;
    }
}