var React = require('react');

var _options = {
  render: renderTile,
  displayName: "Tile"
};

var Tile = React.createClass(_options);

function renderTile () {
  var value = "";
  if (this.props.active){
    value += ' active ' + this.props.owner;
  }
  else {
    value += ' inactive '; 
  }
  if (this.props.win) {
    value += ' winner ';
  }
  return (
      <div className={"tile " + value}
      onClick={this.props.clickhandler}>
        <div className="content"></div>
      </div>
    );
}


exports.Tile = Tile;

