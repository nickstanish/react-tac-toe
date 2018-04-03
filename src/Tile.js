import React from 'react';

export default function Tile(props) {
  const classes = ['tile'];
  if (props.active) {
    classes.push('active');
    classes.push(props.owner);
  } else {
    classes.push('inactive');
  }
  if (props.win) {
    classes.push('winner');
  }
  const className = classes.join(' ');
  return (
    <div className={className} onClick={props.clickhandler}>
      <div className="content"></div>
    </div>
  );
}
