import store from '../stores/SudokuSolverReduxStore';
import { TOGGLE_PENCIL } from './ActionConstants';

export function togglePencilSelection(){
    return { type: TOGGLE_PENCIL }
}