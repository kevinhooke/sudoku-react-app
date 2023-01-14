import React from 'react';
import renderer, { create }  from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from "react-redux";
import SudokuSolver from './SudokuSolver.jsx';
import store from '../stores/SudokuSolverReduxStore'

describe('Test the SudokuSolver container', () => {

    it('Renders the SudokuSolver', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
        <Provider store={store}>
          <SudokuSolver/>
        </Provider>
        );
        const result = renderer.getRenderOutput();
        console.log(result);
        //TODO need asserts

    });
});
