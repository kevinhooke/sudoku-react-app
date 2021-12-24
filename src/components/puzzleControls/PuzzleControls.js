import React from 'react';
import { connect } from 'react-redux';
import { togglePencilSelection } from '../../actions/controlActions';
import pencilImg from "./black-24dp/2x/outline_edit_black_24dp.png";
import '../../App.css';

const PuzzleControls = (props) => {

    return(
        <div>
            <div>Controls</div>
            
            <div>
                <button onClick={props.togglePencilSelection}>
                    <img src={pencilImg} alt="pencil image"/>
                </button>
            </div>

            <div>
                <table>
                    <tbody>
                            <tr>
                                <td className="pencilCandidate">1</td>
                                <td className="pencilCandidate">2</td>
                                <td className="pencilCandidate">3</td>
                            </tr>
                            <tr>
                                <td className="pencilCandidate">4</td>
                                <td className="pencilCandidate">5</td>
                                <td className="pencilCandidate">6</td>
                            </tr>
                            <tr>
                                <td className="pencilCandidate">7</td>
                                <td className="pencilCandidate">8</td>
                                <td className="pencilCandidate">9</td>
                            </tr>

                    </tbody>
                </table>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pencilControlSelected : state.controls.pencilControlSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePencilSelection : () => dispatch(togglePencilSelection())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleControls);