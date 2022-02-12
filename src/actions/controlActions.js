import store from '../stores/SudokuSolverReduxStore';
import { TOGGLE_PENCIL,
    PENCIL_SELECTION_CHANGED,
    PENCIL_UPDATE_FOR_SQUARE,
    CLEAR_PENCIL_MARKS_FOR_SQUARE } from './ActionConstants';

export function togglePencilSelection(){
    return { type: TOGGLE_PENCIL }
}

export function changePencilSelection(value){
    return { type: PENCIL_SELECTION_CHANGED, payload: value }
}

export function clearPencilGridForSquare(row, col){
    let payload = {
        row: row,
        col: col,
    }
    return { type: CLEAR_PENCIL_MARKS_FOR_SQUARE, payload: payload }
}

export function updatePencilGridForSquare(row, col, value){
    let payload = {
        row: row,
        col: col,
        value: value
    }
    return { type: PENCIL_UPDATE_FOR_SQUARE, payload: payload }
}