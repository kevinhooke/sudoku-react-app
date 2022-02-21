import { NEW_DATA,
    UPDATE_SPINNER,
    CLEAR_GRID,
    RESET_SAMPLE_PUZZLE,
    RETRIEVE_SOLUTION_STARTING,
    RETRIEVE_SOLUTION_SUCCESS,
    RETRIEVE_PUZZLE_STARTING,
    RETRIEVE_PUZZLE_SUCCESS,
    PENCIL_UPDATE_FOR_CELL,
    CLEAR_PENCIL_MARKS_FOR_CELL,
    VALUE_UPDATE_FOR_CELL,
    CORRECT_GUESS_UPDATE_FOR_CELL } from '../actions/ActionConstants'; 

//pencil marks initial state
let initialPencilMarks = [
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

]

//initial state:
// grid : tracks state for current puzzle
// solutionGrid: holds the retrieved solution for the current puzzle
// pencilMarks: tracks the state for the user entered pencil marks for the current puzzle
var puzzleData = {
    grid: [],
    solutionGrid: [],
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
                solutionGrid : newData,
                showSpinner : "false",
                fetchPuzzleStarted: false
            };

        case RETRIEVE_PUZZLE_SUCCESS:
            var newData = [];

            for(var row in action.payload.data){
                console.log("row: " + JSON.stringify(action.payload.data[row]));
                newData[row] = action.payload.data[row].map( (currentValue) => 
                ( currentValue === "" ? { value: "", initialGiven: false} : { value: currentValue, initialGiven: true } ) );
            }
            return { ...state, 
                grid : newData,
                showSpinner : "false",
                puzzleId: action.payload.puzzleId,
                puzzleDifficulty: action.payload.puzzleDifficulty
            };
        
        //TODO refactor this and move to controlsReducer
        case PENCIL_UPDATE_FOR_CELL:

            let updatedPencilGrid = state.pencilMarks.slice();
            let updatedGridForCell = updatedPencilGrid[action.payload.row][action.payload.col];

            //to help with displaying the grid, the pencil grid values are split across 3 rows
            //if cell already has this pencil value set then clear it, otherwise set it
            //TODO create constants for these values
            if(action.payload.value < 4){
                updatedGridForCell[0][action.payload.value-1] == action.payload.value ?
                    updatedGridForCell[0][action.payload.value-1] = "" : updatedGridForCell[0][action.payload.value-1] = action.payload.value;
            }
            else if(action.payload.value > 3 && action.payload.value < 7){
                updatedGridForCell[1][action.payload.value - 4] == action.payload.value ?
                updatedGridForCell[1][action.payload.value - 4] = "" : updatedGridForCell[1][action.payload.value - 4] = action.payload.value;
            }
            else{
                updatedGridForCell[2][action.payload.value - 7] == action.payload.value ?
                updatedGridForCell[2][action.payload.value - 7] = "" : updatedGridForCell[2][action.payload.value - 7] = action.payload.value;
            }
            updatedPencilGrid[action.payload.row][action.payload.col] = updatedGridForCell;
            return {
                ...state,
                pencilMarks: updatedPencilGrid,
            }

        case CLEAR_PENCIL_MARKS_FOR_CELL:
            //TODO
            let updatedPencilGridForClear = state.pencilMarks.slice();
            updatedPencilGridForClear[action.payload.row][action.payload.col] = [
                ["", "", ""], 
                ["", "", ""],
                ["", "", ""],
            ];
        return {
            ...state,
            pencilMarks: updatedPencilGridForClear,
        }

        case VALUE_UPDATE_FOR_CELL:
            //pass row, col, newValue and grid in payload
            let updatedGrid = action.payload.grid.slice();
            //if cell has same value as currently selected in the controls then remove the value
            if(updatedGrid[action.payload.row][action.payload.col].value === action.payload.value.toString()){
                updatedGrid[action.payload.row][action.payload.col] = { value: "", initialGiven: false }
            }
            else{
                updatedGrid[action.payload.row][action.payload.col] = { 
                    value: action.payload.value.toString(),
                    initialGiven: false,
                    correctGuess: action.payload.correctGuess }
            }
                //update grid state with updated grid
            return {
                ...state,
                grid: updatedGrid
            }

            case CORRECT_GUESS_UPDATE_FOR_CELL:
                //pass row, col, newValue and grid in payload
                let updatedGridForGuess = action.payload.grid.slice();
                updatedGridForGuess[action.payload.row][action.payload.col] = { 
                    value: action.payload.value.toString(),
                    initialGiven: false,
                    correctGuess: action.payload.correctGuess
                }
                    //update grid state with updated grid
                return {
                    ...state,
                    grid: updatedGridForGuess
                }
    
        case 'ERROR' :
            return{ ...state, message : action.message};

        case 'UPDATE_SPINNER' :
            return { ...state, showSpinner : action.showSpinner };

        default:
            return state;
    }
}