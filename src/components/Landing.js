import React from 'react';

export default function Landing(props) {

  return (
    <div>
      <h1>Welcome to Hot or Cold</h1>
      <h3>Enter a number, then click "Submit" to start the game.</h3>
      <button onClick={props.showModal}>INSTRUCTIONS</button>
    </div>
  )
}
