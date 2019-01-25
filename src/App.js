import React, { Component } from 'react';
import Game from './components/Game';
import Landing from './components/Landing';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

  }




  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    let modal = (this.state.show)
      ? <Modal hideModal={() => this.hideModal()} />
      : '';
    return (
      <div className="App">
        {modal}
        <Landing showModal={() => this.showModal()} />

        <Game />
      </div>
    );
  }
}

export default App;
