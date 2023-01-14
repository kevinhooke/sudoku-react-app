import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import SudokuSolver from './SudokuSolver.jsx';
import store from '../stores/SudokuSolverReduxStore'

  test('Renders the table containing the sukdoku grid', () => {
    render(
      <Provider store={store}>
        <SudokuSolver/>
      </Provider>
      );
      let sudokuGrid = screen.getByRole('table', {name: 'sudokuGrid'});

      expect(sudokuGrid).toBeInTheDocument();

      //table tbody should have 9 rows
      expect(sudokuGrid.firstChild.childNodes.length).toBe(9);
  });