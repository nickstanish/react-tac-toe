React = require('react');

var GameBoard = require('../scripts/game/Board').GameBoard;

var Home = React.createClass({
	render: function() {
		return (
			<div className="game-wrapper">
          <GameBoard />
        </div>
		);
	}
});

module.exports = Home;
