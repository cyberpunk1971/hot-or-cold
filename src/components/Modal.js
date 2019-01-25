import React from 'react';
import './Modal.css';
import Instructions from './Instructions';

export default function Modal(props) {
  return (
    <div className="Modal">
      <Instructions />
      <button onClick={props.hideModal}>CLOSE</button>
    </div>
  )
}
