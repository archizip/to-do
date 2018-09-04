import React, { Component } from 'react';
import { Modal, Input, DatePicker } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { TextArea } = Input;
import { add } from '../actions';

class CreateItemModal extends Component {

  onChange(e) {
    const { target: { id, value } } = e;
    this.setState({
      [id]: value,
    });
  }

  onDateChange(date) {
    this.setState({
      date: date,
    });
  }

  handleOk = () => {
    const { title, description, date } = this.state;
    this.props.add({ title, description, createdAt: date });
    this.props.handleAdd();
  };

  render() {
    const { show, handleCancel } = this.props;
    return (
      <Modal
        title="Add To-Do"
        visible={show}
        onCancel={handleCancel}
        onOk={this.handleOk}
      >
        <Input id="title" placeholder="Enter title" onChange={this.onChange.bind(this)} />
        <TextArea id="description" placeholder="Enter Description" onChange={this.onChange.bind(this)} autosize />
        <DatePicker id="date" onChange={this.onDateChange.bind(this)} />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ items: state.todo });
const mapDispatchToProps = dispatch => bindActionCreators({ add }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CreateItemModal);
