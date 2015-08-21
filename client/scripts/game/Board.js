var React = require('react');
var Tile = require('./Tile').Tile;

var _options = {
  render: renderBoard,
  getInitialState: getInitialGameState,
  tileHandler: cellClick,
  displayName: "GameBoard",
  toggleTurn: toggleTurn,
  checkWin: checkWin,
  replay: replay
};

var GameBoard = React.createClass(_options);

function getInitialGameState () {
  var tiles = [];
  for (var index = 0; index < 9 ; index++ ) {
    tiles.push({
      active: false,
      owner: null,
      win: false
    });
  }
  return {
    tiles: tiles,
    turn: Math.random() > 0.5 ? 'x' : 'y',
    winner: null,
    replay: false
  };
}

function toggleTurn(){
  if (this.state.turn === 'x'){
    this.state.turn = 'y';
  } else {
    this.state.turn = 'x';
  }
}
function cellClick(cellIndex) {
  console.log('click on index ' + cellIndex);
  if (this.state.tiles[cellIndex].active || this.state.winner){
    return;
  }
  this.state.tiles[cellIndex].active = true;
  this.state.tiles[cellIndex].owner = this.state.turn;
  if (this.checkWin()) {
    var self = this;
    window.setTimeout(function (){
      self.setState({
        replay: true
      });
    }, 500);
  } else {
    this.toggleTurn();
  }
  
  this.setState(this.state);
}

function checkWin() {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  var winGroups = [];
  winGroups.push([0,1,2]);
  winGroups.push([3,4,5]);
  winGroups.push([6,7,8]);
  winGroups.push([0,3,6]);
  winGroups.push([1,4,7]);
  winGroups.push([2,5,8]);
  winGroups.push([0,4,8]);
  winGroups.push([6,4,2]);
  var winningCells = [];
  var tiles = this.state.tiles;
  for (var i = 0; i < winGroups.length; i++){
    var a = winGroups[i][0];
    var b = winGroups[i][1];
    var c = winGroups[i][2];
    if (tiles[a].active && tiles[a].owner === tiles[b].owner && tiles[b].owner === tiles[c].owner){
      winningCells.push(a);
      winningCells.push(b);
      winningCells.push(c);
    }
  }
  if (winningCells.length > 0) {
    this.state.winner = this.state.turn;
    for (var i = 0; i < winningCells.length; i++){
      tiles[winningCells[i]].win = true;
    }
  }
  return winningCells.length > 0;
}

function replay () {
  this.setState(this.getInitialState());
}

function renderBoard () {
  var cells = [];
  for (var i = 0; i < this.state.tiles.length; i++) {
    var tile = this.state.tiles[i];
      cells.push(<Tile
        key={"cell-" + i}
        active={tile.active}
        win={tile.win}
        owner={tile.owner}
        clickhandler={this.tileHandler.bind(this, i)} /> 
      );
  }
  
  if (this.state.replay) {
    var clearfix = <div className="clearfix" key="clearfix" />;
    var replayOverlay = (<div className="replay" key="replay" onClick={this.replay} >
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


exports.GameBoard = GameBoard;