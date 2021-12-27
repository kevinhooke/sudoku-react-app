import store from '../stores/SudokuSolverReduxStore';
import { TOGGLE_PENCIL, PENCIL_SELECTION_CHANGED } from './ActionConstants';

export function togglePencilSelection(){
    return { type: TOGGLE_PENCIL }
}

export function changePencilSelection(value){
    return { type: PENCIL_SELECTION_CHANGED, payload: value }
}