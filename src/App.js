import React, { Component } from 'react';
import './App.css';
import SudokuSolver from "./containers/SudokuSolver";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SudokuSolver/>
      </div>
    );
  }
}

export default App;
