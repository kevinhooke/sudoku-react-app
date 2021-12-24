//initial state
var puzzleData = {
    showSpinner: false
}

export function puzzleDataReducer(state = puzzleData, action) {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return Object.assign( {},{ labelValue : action.payload } );

        case 'NEW_DATA' :
            console.log("puzzleDataReducer is handling NEW_DATA action! ");
            return { ...state, 
                showSpinner: "false",
                grid: action.grid,
                puzzleId: action.puzzleId,
                puzzleDifficulty: action.puzzleDifficulty
             };

        case 'UPDATE':
            console.log("puzzleDataReducer is handling UPDATE action!: "
                + JSON.stringify(action.payload));
            var newData = [];

            for(var row in action.payload.data){
                console.log("row: " + JSON.stringify(action.payload.data[row]));
                newData[row] = action.payload.data[row];
            }
            return { ...state, 
                grid : newData,
                showSpinner : "false"
            };

        case 'PUZZLE_RETRIEVED':
            console.log("puzzleDataReducer is handling PUZZLE_RETRIEVED action!: "
                + JSON.stringify(action.payload));
            var newData = [];

            for(var row in action.payload.data){
                console.log("row: " + JSON.stringify(action.payload.data[row]));
                newData[row] = action.payload.data[row];
            }
            return { ...state, 
                grid : newData,
                showSpinner : "false",
                puzzleId: action.payload.puzzleId,
                puzzleDifficulty: action.payload.puzzleDifficulty
            };


        case 'ERROR' :
            console.log("puzzleDataReducer is handling ERROR action!");
            return{ ...state, message : action.message};

        case 'UPDATE_SPINNER' :
            console.log("puzzleDataReducer is handling UPDATE_SPINNER action!");
            return { ...state, showSpinner : action.showSpinner };

        default:
            return state;
    }
}