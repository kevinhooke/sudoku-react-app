import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CellComponent from "../components/CellComponent";
import PuzzleControls from "../components/puzzleControls/PuzzleControls";
import { connect } from 'react-redux';
import { updatePuzzleData, updateSpinner, clearData, initSamplePuzzle, 
    fetchPuzzleStarting, getPuzzle,
    fetchSolutionStarting, fetchPuzzleSolution,
    updateValueForCell,
    updateCorrectGuessForCell } from '../actions/actionCreators';
    import { updatePencilGridForCell, clearPencilGridForCell } from '../actions/controlActions';
import '../App.css';

//TODO error on clicking cell with no number guess button selected

//TODO display solution has stopped working

//TODO validation on input fields

//TODO clear error message on each action

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
        //fetch solution for display
        this.props.fetchSolutionStarting(true);
        this.props.updateSpinner("true");
        this.props.fetchPuzzleSolution();
        //this.props.updateSpinner(false);
    }

    /**
     * Compares currently entered guesses against the solution for this puzzle. Indicates correct
     * guesses in green, incorrect guesses with red.
     * @param {*} event 
     */
    handleCheckCorrect = (event) => {
        this.props.grid.forEach( (row, rowIndex) => {
            row.forEach( (cell, cellIndex) => {
                console.log("row, cell: " + rowIndex + "," + cellIndex + ": " + JSON.stringify(cell));
                console.log("cell solution: " + JSON.stringify(this.props.solutionGrid[rowIndex][cellIndex]));

                if(!cell.initialGiven && cell.value){
                    if(cell.value === this.props.solutionGrid[rowIndex][cellIndex].value){
                        console.log("... cell is correct!");
                        this.props.updateCorrectGuessForCell(this.props.grid, rowIndex, cellIndex, cell.value, true);
                    }
                    else{
                        console.log("... cell is incorrect");
                        this.props.updateCorrectGuessForCell(this.props.grid, rowIndex, cellIndex, cell.value, false);
                    }
                }
            });
        });
    }

    /**
     * Clears the puzzle grid.
     */
    handleClear(event) {
        event.preventDefault();
        this.props.clearData();
    }

    /**
     * Reloads the hardcoded sample puzzle.
     * @param {*} event 
     */
    handleResetSample(event){
        this.props.initSamplePuzzle();
    }

    /**
     * Retrieves a puzzle with the requested difficulted from the generated puzzles stored
     * in DynamoDB.
     * @param {*} difficulty 
     */
    handleGetPuzzle = (difficulty) => {
        console.log("handleGetPuzzle(): " + difficulty);
        this.props.fetchPuzzleStarting();
        this.props.updateSpinner("true");
        this.props.getPuzzle(difficulty);
    }

    /**
     * Load initial puzzle from generated puzzle in DynamoDB with a solution.
     */
    componentWillMount() {
        //this.props.initSamplePuzzle();
        this.handleGetPuzzle('EASY');
    }

    onError(){
        console.log('SudokuSolver onError triggered');
    }

    handlePencilGridClick(row, col){
        console.log("handlePencilGridClick called for row, col: " + row + ", " + col + ", pencil: "
            + this.props.selectedPencilValue);
        if(this.props.pencilControlSelected){
            this.props.updatePencilGridForCell(row, col, this.props.selectedPencilValue);
        }
        else{
            this.props.clearPencilGridForCell(row, col);
            this.props.updateValueForCell(this.props.grid, row, col, this.props.selectedPencilValue);
        }
    }

    buildPencilGridForRowCell(row,col){
        //TODO this is called for every render for every cell which is unnecessary
        //console.log("buildPencilGridForRowCell() called..., row: " + row + ", col: " + col);

        //TODO handle onclick when pencil is not selected, set guess in cell instead

        return (
            <table className="pencilGrid" onClick={() => this.handlePencilGridClick(row, col)}>
                        {
                            this.props.pencilMarks[row][col].map((pencilMarksForCell, pencilRowIndex) => {
                                return [
                                    <tr key={pencilRowIndex}>
                                    {
                                        pencilMarksForCell.map((pencilCell, pencilCellIndex) => {
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
                        <button className="buttons" onClick={this.handleCheckCorrect}>Check puzzle solution</button>
                    </div>
                    <div>
                        <button className="buttons" onClick={this.handleSubmit}>Show puzzle solution</button>
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
                    <div>Load a puzzle:</div>
                    <div>
                        <button onClick={ () => this.handleGetPuzzle('EASY')}>Easy puzzle</button>                        
                    </div>
                    <div>
                        <button onClick={ () => this.handleGetPuzzle('MEDIUM')}>Medium puzzle</button>
                    </div>
                    <div>
                        <button onClick={() => this.handleGetPuzzle('HARD')}>Hard puzzle</button>
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
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[1][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 1, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(1, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[2].map((cell, colIndex) => (
                                        <td key={"row2" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[2][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 2, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(2, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[3].map((cell, colIndex) => (
                                        <td key={"row3" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[3][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 3, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(3, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[4].map((cell, colIndex) => (
                                        <td key={"row4" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[4][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 4, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(4, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[5].map((cell, colIndex) => (
                                        <td key={"row5" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[5][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 5, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(5, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[6].map((cell, colIndex) => (
                                        <td key={"row6" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[6][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 6, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(6, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[7].map((cell, colIndex) => (
                                        <td key={"row7" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[7][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 7, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(7, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    )
                                )}
                        </tr>
                        <tr>
                            {
                                this.props.grid[8].map((cell, colIndex) => (
                                        <td key={"row8" + colIndex}>
                                            <div className="cellValue">
                                                <div className="cellValue">
                                                    <CellComponent value={this.props.grid[8][colIndex]}
                                                            onChange={this.handleGridChange.bind(this, 8, colIndex)}/>
                                                
                                                    <div>
                                                    { this.buildPencilGridForRowCell(8, colIndex) }
                                                    </div>
                                                </div>
                                            </div>
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
    if(state.puzzle.grid == null || state.puzzle.grid.length == 0){
        state.puzzle.grid = [];
        for (var row = 0; row < 9; row++) {
            state.puzzle.grid[row] = [];
        }
    }
    return { 
        grid: state.puzzle.grid,
        solutionGrid: state.puzzle.solutionGrid,
        pencilMarks: state.puzzle.pencilMarks,
        message: state.puzzle.message,
        showSpinner: state.puzzle.showSpinner,
        puzzleId: state.puzzle.puzzleId,
        puzzleDifficulty: state.puzzle.puzzleDifficulty,
        pencilControlSelected : state.controls.pencilControlSelected,
        selectedPencilValue: state.controls.selectedPencilValue,
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePuzzleData :  grid => dispatch(updatePuzzleData(grid)),
        clearData : () => dispatch(clearData()),
        initSamplePuzzle : () => dispatch(initSamplePuzzle()),
        fetchSolutionStarting : () => dispatch(fetchSolutionStarting()),
        fetchPuzzleSolution : (displaySolution) => dispatch(fetchPuzzleSolution(displaySolution)),
        fetchPuzzleStarting : () => dispatch(fetchPuzzleStarting()),
        getPuzzle : (difficulty) => dispatch(getPuzzle(difficulty)),
        updateSpinner : (value) => dispatch(updateSpinner(value)),
        updatePencilGridForCell : (row, col, value) => dispatch(updatePencilGridForCell(row, col, value)),
        clearPencilGridForCell : (row, col) => dispatch(clearPencilGridForCell(row, col)),
        updateValueForCell: (grid, row, col, value) => dispatch(updateValueForCell(grid, row, col, value)),
        updateCorrectGuessForCell : (grid, row, col, value, correct) => dispatch(updateCorrectGuessForCell(grid, row, col, value, correct)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuSolver);