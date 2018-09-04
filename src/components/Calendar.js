import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import List from '../components/List';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetch } from '../actions';
import { bindActionCreators } from 'redux';

class Calendar extends Component {

  state = {
    week: [],
    date: moment(),
  };

  componentDidMount() {
    this.props.fetch();
    this.generateWeek();
  }

  generateWeek = () => {
    const { date } = this.state;
    console.log(date);
    const startOfWeek = date.clone().startOf('isoWeek');
    const endOfWeek = date.clone().endOf('isoWeek');
    const week = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      week.push(day);
      day = day.clone().add(1, 'd');
    }
    this.setState({
      week,
    });
  };

  changeWeek = (increase = false) => {
    const { date } = this.state;
    this.setState({
      date: increase ? date.add(7, 'd') : date.subtract(7, 'd'),
    }, this.generateWeek());
  };

  setCurrentDate = () => {
    this.setState({
      date: moment(),
    }, () => this.generateWeek());
  };

  render() {
    const { week, date } = this.state;
    const { onCellClick } = this.props;
    return (
      <div className="calendar">
        <div className="title">
          <div>{date.format('MMMM YYYY')}</div>
          <Button.Group>
            <Button type="primary" onClick={() => this.changeWeek()}>
              <Icon type="left" />
            </Button>
            <Button type="primary" onClick={() => this.setCurrentDate()}>
              Today
            </Button>
            <Button type="primary" onClick={() => this.changeWeek(true)}>
              <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
        <div className="columns">
          {week.map((day, index) => {
            return (
              <div key={index} className="day-column">
                <div className="title">
                  <h2>{day.format('ddd D')}</h2>
                  <Button icon='plus' onClick={() => onCellClick()}/>
                </div>
                <List items={this.props.items.filter(item => {
                  return moment(item.createdAt).format('YYYY-MM-DD') === day.format('YYYY-MM-DD');
                })} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.todo,
});
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
