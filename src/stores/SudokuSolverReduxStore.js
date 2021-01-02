import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

//initial state
var puzzleData = {
}

// reducer for changing puzzleData state
function puzzleDataReducer(state = puzzleData, action) {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return Object.assign( {},{ labelValue : action.payload } );

        //case 'NEW_DATA_PREVIOUS' :
        //    this.setData(action.data);
        //    this.emit('change');
        //    break;

        case 'NEW_DATA' :
            return Object.assign( {}, { grid: action.data } );

        // case 'UPDATE_PREVIOUS':
        //     console.log("SudokuSolverReduxStore is handling UPDATE action!: "
        //         + JSON.stringify(action.data));
        //     var newData = [];

        //     for(var row in action.data){
        //         console.log("row: " + JSON.stringify(action.data[row]));
        //         newData[row] = action.data[row];
        //     }
        //     this.setData(newData);
        //     this.emit('change');
        //     break;

        case 'UPDATE':
            console.log("SudokuSolverReduxStore is handling UPDATE action!: "
                + JSON.stringify(action.data));
            var newData = [];

            for(var row in action.data){
                console.log("row: " + JSON.stringify(action.data[row]));
                newData[row] = action.data[row];
            }
            return Object.assign( {}, { grid : newData } );

        // case 'ERROR_PREVIOUS' :
        //     this.setMessage(action.message);
        //     this.emit('error');
        //     break;

        case 'ERROR' :
            let result = Object.assign( {}, { message : action.message } );
            return Object.assign( result, action.data );

        default:
            return state;
    }
}

const middlewares = [thunk, devToolsEnhancer()];

//let store = createStore(puzzleDataReducer, devToolsEnhancer());
let store = createStore(puzzleDataReducer, applyMiddleware(...middlewares));
export default store;
