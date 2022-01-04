import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CellComponent from "../components/CellComponent";
import PuzzleControls from "../components/puzzleControls/PuzzleControls";
import { connect } from 'react-redux';
import { updatePuzzleData, updateSpinner, clearData, initSamplePuzzle, 
    fetchPuzzleStarting, getPuzzle,
    fetchSolutionStarting, fetchPuzzleSolution } from '../actions/actionCreators';
    import { updatePencilGridForSquare } from '../actions/controlActions';
import '../App.css';

//TODO validation on input fields

//TODO clear error message on each action

//TODO show solving progress/status while waiting for response

//TODO spruce up error message box

class SudokuSolver extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                grid: [],
                message: ""
            };

        for (var row = 0; row < 9; row++) {
            this.state.grid[row] = [];
        }

        this.handleGridChange = this.handleGridChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleResetSample = this.handleResetSample.bind(this);
        this.buildPencilGridForRowCell = this.buildPencilGridForRowCell.bind(this);
        this.handlePencilGridClick = this.handlePencilGridClick.bind(this);
    };

    //handler approach 2:
    handleGridChange(row, colIndex, event) {
        console.log("row [" + row + "] col [" + colIndex + "] : " + event.target.value);
        //var updatedGrid = [...this.state.grid];
        var updatedGrid = [...this.props.grid];
        updatedGrid[row][colIndex] = event.target.value;

        this.props.updatePuzzleData(updatedGrid);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit pressed");
        this.props.fetchSolutionStarting();
        this.props.updateSpinner("true");
        this.props.fetchPuzzleSolution();
        //this.props.updateSpinner(false);
    }

    handleClear(event) {
        event.preventDefault();
        console.log("clear pressed");
        this.props.clearData();
    }

    handleResetSample(event){
        this.props.initSamplePuzzle();
    }

    handleGetPuzzle = (difficulty) => {
        console.log("handleGetPuzzle(): " + difficulty);
        this.props.fetchPuzzleStarting();
        this.props.updateSpinner("true");
        this.props.getPuzzle(difficulty);
    }

    /**
     * Load initial state with a sample.
     */
    componentWillMount() {
        this.props.initSamplePuzzle();
    }

    onError(){
        console.log('SudokuSolver onError triggered');
    }

    handlePencilGridClick(row, col){
        console.log("handlePencilGridClick called for row, col: " + row + ", " + col + ", pencil: "
            + this.props.selectedPencilValue);
        this.props.updatePencilGridForSquare(row, col, this.props.selectedPencilValue);
    }

    buildPencilGridForRowCell(row,col){
        console.log("buildPencilGridForRowCell() called..., row: " + row + ", col: " + col);
        return (
            <table className="pencilGrid" onClick={() => this.handlePencilGridClick(row, col)}>
                        {
                            this.props.pencilMarks[row][col].map((pencilMarksForSquare, pencilRowIndex) => {
                                return [
                                    <tr key={pencilRowIndex}>
                                    {
                                        pencilMarksForSquare.map((pencilCell, pencilCellIndex) => {
                                            return [                                            
                                                    <td row={pencilCellIndex} className="pencilCell">
                                                        { pencilCell ? pencilCell : <div>&nbsp;</div> }
                                                    </td>                                                
                                            ]
                                        })
                                    }
                                    </tr>
                                ]
                            })
                        }
            </table>
        )
    }


    render() {
        return (
            <div className="main-container">

                <div className="spinner">
                    { this.props.showSpinner === "true" && <CircularProgress/> }
                </div>

                <div className="button-container">
                    <div id="messages">{this.props.message}</div>
                    <div>
                        <button className="buttons" onClick={this.handleSubmit}>Solve Puzzle</button>
                    </div>
                    <div>
                        <button className="buttons" onClick={this.handleClear}>Clear grid</button>
                    </div>
                    <div>
                        <button className="buttons" onClick={this.handleResetSample}>Reload sample puzzle</button>
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div>
                        <button onClick={ () => this.handleGetPuzzle('EASY')}>Load easy puzzle</button>                        
                    </div>
                    <div>
                        <button onClick={ () => this.handleGetPuzzle('MEDIUM')}>Load medium puzzle</button>
                    </div>
                    <div>
                        <button onClick={() => this.handleGetPuzzle('HARD')}>Load hard puzzle</button>
                    </div>

                    <div>
                        <p>Puzzle id:</p>
                        <p>{ this.props.puzzleId }</p>
                        <p>Difficulty: { this.props.puzzleDifficulty }</p>
                    </div>
                </div>
                <div className="sudoku-grid-container">
                    <table className="sudoku-grid">
                        <tbody>
                        <tr>
                            {
                                this.props.grid[0].map((cell, colIndex) => (
                                        <td key={"row0" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[0][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 0, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(0, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {

                                this.props.grid[1].map((cell, colIndex) => (
                                        <td key={"row1" + colIndex}>
                                            <CellComponent value={this.props.grid[1][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 1, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[2].map((cell, colIndex) => (
                                        <td key={"row2" + colIndex}>
                                            <CellComponent value={this.props.grid[2][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 2, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[3].map((cell, colIndex) => (
                                        <td key={"row3" + colIndex}>
                                            <CellComponent value={this.props.grid[3][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 3, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[4].map((cell, colIndex) => (
                                        <td key={"row4" + colIndex}>
                                            <CellComponent value={this.props.grid[4][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 4, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[5].map((cell, colIndex) => (
                                        <td key={"row5" + colIndex}>
                                            <CellComponent value={this.props.grid[5][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 5, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[6].map((cell, colIndex) => (
                                        <td key={"row6" + colIndex}>
                                            <CellComponent value={this.props.grid[6][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 6, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[7].map((cell, colIndex) => (
                                        <td key={"row7" + colIndex}>
                                            <CellComponent value={this.props.grid[7][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 7, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[8].map((cell, colIndex) => (
                                        <td key={"row8" + colIndex}>
                                            <CellComponent value={this.props.grid[8][colIndex]}
                                                        onChange={this.handleGridChange.bind(this, 8, colIndex)}/>
                                        </td>
                                    )
                                )}
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="controls-container">
                    <PuzzleControls/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    //if grid is undefined, initialize with empty arrays which we use later
    //to draw the grid
    if(state.puzzle.grid == null){
        state.puzzle.grid = [];
        for (var row = 0; row < 9; row++) {
            state.puzzle.grid[row] = [];
        }
    }
    return { 
        grid: state.puzzle.grid,
        pencilMarks: state.puzzle.pencilMarks,
        message: state.puzzle.message,
        showSpinner: state.puzzle.showSpinner,
        puzzleId: state.puzzle.puzzleId,
        puzzleDifficulty: state.puzzle.puzzleDifficulty,
        selectedPencilValue: state.controls.selectedPencilValue,
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePuzzleData :  grid => dispatch(updatePuzzleData(grid)),
        clearData : () => dispatch(clearData()),
        initSamplePuzzle : () => dispatch(initSamplePuzzle()),
        fetchSolutionStarting : () => dispatch(fetchSolutionStarting()),
        fetchPuzzleSolution : () => dispatch(fetchPuzzleSolution()),
        fetchPuzzleStarting : () => dispatch(fetchPuzzleStarting()),
        getPuzzle : (difficulty) => dispatch(getPuzzle(difficulty)),
        updateSpinner : (value) => dispatch(updateSpinner(value)),
        updatePencilGridForSquare : (row, col, value) => dispatch(updatePencilGridForSquare(row, col, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuSolver);