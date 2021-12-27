import React from 'react';
import { connect } from 'react-redux';
import { togglePencilSelection, changePencilSelection } from '../../actions/controlActions';
import pencilImg from "./black-24dp/2x/outline_edit_black_24dp.png";
import '../../App.css';


const PuzzleControls = (props) => {

    const handlePencilSelection = (value) => {
        console.log("Pencil selection: " + value);
        props.changePencilSelection(value);
    }
    
    return(
        <div>
            <div>Controls</div>
            
            <div>
                <button onClick={props.togglePencilSelection}
                    className={props.pencilControlSelected ? 'buttonSelected' : ''}>
                    <img src={pencilImg} alt="pencil image"/>
                </button>
            </div>

            <div>
                <table>
                    <tbody>
                            <tr>
                                <td className={props.selectedPencilValue == 1 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(1)}>1</td>
                                <td className={props.selectedPencilValue == 2 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                     onClick={ () => handlePencilSelection(2)}>2</td>
                                <td className={props.selectedPencilValue == 3 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(3)}>3</td>
                            </tr>
                            <tr>
                                <td className={props.selectedPencilValue == 4 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(4)}>4</td>
                                <td className={props.selectedPencilValue == 5 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(5)}>5</td>
                                <td className={props.selectedPencilValue == 6 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(6)}>6</td>
                            </tr>
                            <tr>
                                <td className={props.selectedPencilValue == 7 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(7)}>7</td>
                                <td className={props.selectedPencilValue == 8 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(8)}>8</td>
                                <td className={props.selectedPencilValue == 9 ? 'pencilCandidateSelected' : 'pencilCandidate'}
                                    onClick={ () => handlePencilSelection(9)}>9</td>
                            </tr>

                    </tbody>
                </table>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pencilControlSelected : state.controls.pencilControlSelected,
        selectedPencilValue : state.controls.selectedPencilValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePencilSelection : () => dispatch(togglePencilSelection()),
        changePencilSelection : (value) => dispatch(changePencilSelection(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleControls);