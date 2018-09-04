import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update } from '../actions';

class Item extends Component {
  state = {
    item: this.props.item,
  };

  onStatusChange = (e) => {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        done: e.target.checked,
      },
    }, () => {
      this.props.update(this.state.item);
    });
  };

  render() {
    const { title, description, done } = this.state.item;
    return (
      <div className="item">
        <Checkbox checked={done} onChange={this.onStatusChange} />
        <div className="item-title">
          <h2>{title}</h2>
          <div className="item-description">{description}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.todo });
const mapDispatchToProps = dispatch => bindActionCreators({ update }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Item);
