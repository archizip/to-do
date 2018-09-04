import React, { Component } from 'react';
import CreateItemModal from '../components/CreateItemModal';
import Calendar from '../components/Calendar';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <CreateItemModal show={showModal} handleAdd={this.toggleModal} handleCancel={this.toggleModal} />
        <Calendar onCellClick={this.toggleModal} />
      </div>
    );
  }
}

export default App;
