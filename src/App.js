import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Tac-Toe</h1>
        </header>
        <main>
          <Board />
        </main>
      </div>
    );
  }
}

export default App;
