var React = require('react');
var Router = require('react-router');
var GameBoard = require('./game/Board').GameBoard;

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>React-Tac-Toe</h1>
			</div>
		);
	}
});


var App = React.createClass({
	render: function() {	
		return (
			<div className="container">
				<Header />
				<div className="game-wrapper">
          <GameBoard />
        </div>
			</div>
		);
	}
});


var routes = (
	<Router.Route name="app" path="/" handler={App}>
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
