import React from 'react';
import Tile from './Tile';
import './Board.css';


// 0 1 2
// 3 4 5
// 6 7 8
const WIN_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

const SQUARES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: {},
      turn: Math.random() > 0.5 ? 'x' : 'y',
      winner: null,
      replay: false
    };
  }

  cellClick(cellIndex) {
    if (this.state.winner || this.state.tiles[cellIndex]) {
      return;
    }
    const nextState = {
      ...this.state,
      tiles: {
        ...this.state.tiles,
        [cellIndex]: {
          active: true,
          owner: this.state.turn
        }
      }
    };

    this.setState(this.checkWinAndGetNextState(nextState));
  }

  checkWinAndGetNextState(nextState) {
    const winningCells = [];
    const tiles = nextState.tiles;
    for (let i = 0; i < WIN_COMBOS.length; i++){
      const [a, b, c] = WIN_COMBOS[i];
      if (tiles[a] && tiles[b] && tiles[c] && tiles[a].owner === tiles[b].owner && tiles[b].owner === tiles[c].owner){
        winningCells.push(a);
        winningCells.push(b);
        winningCells.push(c);
      }
    }

    if (winningCells.length > 0) {
      const newTiles = {};
      winningCells.forEach(index => {
        newTiles[index] = {
          ...tiles[index],
          win: true
        };
      });

      return {
        ...nextState,
        tiles: {
          ...tiles,
          ...newTiles
        },
        winner: this.state.turn,
        replay: true
      };
    }
    return {
      ...nextState,
      turn: this.state.turn === 'x' ? 'y' : 'x',
      replay: Object.keys(nextState.tiles).length === SQUARES.length
    };
  }



  replay () {
    this.setState({
      tiles: {},
      winner: null,
      replay: false
    });
  }

  render() {
    const cells = SQUARES.map(index => {
      const data = this.state.tiles[index] || {};
      return (
        <Tile
          key={index}
          active={data.active}
          win={data.win}
          owner={data.owner}
          clickhandler={() => this.cellClick(index)} />
      );
    });

    if (this.state.replay) {
      var clearfix = <div className="clearfix" key="clearfix" />;
      var replayOverlay = (<div className="replay" key="replay" onClick={() => this.replay()} >
          <h3>Click to play again</h3>
        </div>
        );
      cells.push(clearfix);
      cells.push(replayOverlay);
    }
    return (
      <div>
        <div>
          <h3> Turn:
            <div className={'showTurn ' + this.state.turn}>
            </div>
          </h3>
        </div>
        <div className={"gameboard turn-" + this.state.turn}>
          {cells}
        </div>
      </div>
    );
  }
}
