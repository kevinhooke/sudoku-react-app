import store from '../stores/SudokuSolverReduxStore';
import request from 'superagent';
import axios from 'axios';
import { NEW_DATA, 
    UPDATE_SPINNER, 
    CLEAR_GRID,
    RESET_SAMPLE_PUZZLE,
    RETRIEVE_SOLUTION_STARTING,
    RETRIEVE_SOLUTION_SUCCESS,
    RETRIEVE_PUZZLE_STARTING,
    RETRIEVE_PUZZLE_SUCCESS } from './ActionConstants'; 
import config from '../config.js';

const emptyGrid = {
    rows:
        [
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
            [ {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
        ]
}

export function clearData(){
    return { type: CLEAR_GRID, showSpinner : false, grid: emptyGrid.rows }
}

export function updateSpinner(value){
    return { type: UPDATE_SPINNER, showSpinner : value }
}

export function updatePuzzleData(payload) {
    return { type: NEW_DATA, grid: payload }
};

export function initSamplePuzzle(){
    console.log("actionCreators initSamplePuzzle()");
    var puzzle = {
        showSpinner : "false",
        rows:
            [
                [{value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "8", initialGiven: true }, {value: "1", initialGiven: true }, {value: "", initialGiven: false }, {value: "6", initialGiven: true }, {value: "7", initialGiven: true }, {value: "", initialGiven: false }],
                [{value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "7", initialGiven: true }, {value: "4", initialGiven: true }, {value: "9", initialGiven: true }, {value: "", initialGiven: false }, {value: "2", initialGiven: true }, {value: "", initialGiven: false }, {value: "8", initialGiven: true }],
                [{value: "", initialGiven: false }, {value: "6", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "5", initialGiven: true }, {value: "", initialGiven: false }, {value: "1", initialGiven: true }, {value: "", initialGiven: false }, {value: "4", initialGiven: true }],
                [{value: "1", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "3", initialGiven: true }, {value: "9", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
                [{value: "4", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "8", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "7", initialGiven: true }],
                [{value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "6", initialGiven: true }, {value: "9", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "3", initialGiven: true }],
                [{value: "9", initialGiven: true }, {value: "", initialGiven: false }, {value: "2", initialGiven: true }, {value: "", initialGiven: false }, {value: "3", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "6", initialGiven: true }, {value: "", initialGiven: false }],
                [{value: "6", initialGiven: true }, {value: "", initialGiven: false }, {value: "1", initialGiven: true }, {value: "", initialGiven: false }, {value: "7", initialGiven: true }, {value: "4", initialGiven: true }, {value: "3", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }],
                [{value: "", initialGiven: false }, {value: "3", initialGiven: true }, {value: "4", initialGiven: true }, {value: "", initialGiven: false }, {value: "6", initialGiven: true }, {value: "9", initialGiven: true }, {value: "", initialGiven: false }, {value: "", initialGiven: false }, {value: "", initialGiven: false }]
            ]
    }

    return {
        type: RESET_SAMPLE_PUZZLE,
        grid: puzzle.rows
    };
}

export const fetchPuzzleFailed = (payload) => {
    return {
        type: 'ERROR',
        payload: payload
    }
}

export const fetchSolutionStarting = () => {
    return {
        type: RETRIEVE_SOLUTION_STARTING
    }
}

export const fetchPuzzleStarting = () => {
    return {
        type: RETRIEVE_PUZZLE_STARTING
    }
}

export const fetchPuzzleSucess = (updatePayload) => {
    return {
        type: RETRIEVE_SOLUTION_SUCCESS,
        payload: updatePayload
    }
}

export const fetchPuzzleSolution = () => (dispatch) => {
    console.log("actionCreators: fetchPuzzleSolution()");

    var requestPayload = {};
    requestPayload.rows = buildRequest();

    request.post(config.solverUrl)
        .send(requestPayload)
        .set('Content-Type', 'application/json')
        .timeout({
            response: 10000,  // 10 secs before response
            deadline: 15000, // 15 sec to complete
        })
        .end(function(err, res){
            if (err) {
                console.log("request failed: " + JSON.stringify(err));
            } else {
                console.log("success: ");
                console.log(JSON.stringify(res));
                if (res.body.errorMessage) {
                    let payload = {
                        message: "Failed to solve puzzle, is it a valid puzzle with a single solution?"
                    }
                    dispatch(fetchPuzzleFailed(payload));
                } else {
                    var parsedData = parseResponse(res.body.rows);
                    let updatePayload = {
                        data: parsedData
                    }
                    dispatch(fetchPuzzleSucess(updatePayload));
                }
            }
        });
}

export const getPuzzle = (difficulty) => async (dispatch) => {
    console.log("actionCreators: getPuzzle(): " + difficulty);

    var requestPayload = {};

    request.get(config.getPuzzleUrl + '?difficulty=' + difficulty)
        .set('Content-Type', 'application/json')
        .timeout({
            response: 10000,  // 10 secs before response
            deadline: 15000, // 15 sec to complete
        })
        .end(function(err, res){
            if (err) {
                console.log("request failed: " + JSON.stringify(err));
            } else {
                console.log("success: ");
                console.log(JSON.stringify(res));
                console.log("1");
                if (res.body.errorMessage) {
                    console.log("2a error");
                    let payload = {
                        message: "Failed to get puzzle?"
                    }
                    dispatch({
                        type: 'ERROR',
                        payload: payload
                    })
                } else {
                    console.log("2b not error");
                    var parsedData = parseResponse(res.body.data.puzzle.puzzle);
                    console.log("3 before returning UODATE action");
                    let updatePayload = {
                        data: parsedData,
                        puzzleId : res.body.data.puzzle.id,
                        puzzleDifficulty: res.body.data.puzzle.difficulty
                    }
                    dispatch({
                        type: RETRIEVE_PUZZLE_SUCCESS,
                        payload: updatePayload
                    })
                }
            }
        });
}

//parses response from api call
function parseResponse(response){
    var parsedData = {};
    var temp = response;
    for (var row=0;row<9;row++) {
        parsedData[row] = [];
        let rowValues = temp[row];
        parsedData[row] = rowValues.split('');
        //replace '.'s with '' for display in the grid
        parsedData[row] = parsedData[row].map( (value, index) => 
            { return value === '.' ? "" : value })
    }
    return parsedData;
}

//builds request to Solver API (AWS Lambda)
function buildRequest(){
    var requestData = [];
    var currentData = store.getState().puzzle.grid;

    console.log("current data: " + JSON.stringify(currentData));
    for (var row=0;row<9;row++) {
        //previous approach, prior to changing to ojectsclone a copy of the current row array
        //var currentRow = [...currentData[row]];
        //for(var cell=0;cell<9;cell++){
        //    if(currentRow[cell].trim() === ""){
        //        currentRow[cell] = ".";
        //    }
        //}

        //new approach, post changing to objects
        var currentRow = currentData[row].map( (currentCell) => currentCell.value === "" ? "." : currentCell.value);
        //join array to a string
        requestData[row] = currentRow.join("");
    }
    //console.log("check, array in store: " + JSON.stringify( SudokuSolverStore.getData()));
    return requestData;
}
