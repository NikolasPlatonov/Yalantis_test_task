import React, { Component } from 'react';
import './../App.css';
import s from './MonthUsersList.module.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MonthUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null,
    };
  }

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  searchMonthUsers = (usersArr, index) => {
    let usersMonthBorn = [];
    for (let i = 0; i < usersArr.length; i++) {
      if (usersArr[i].dob.slice(5, 7) === index) {
        usersMonthBorn.push(
          usersArr[i].firstName + '\u00A0' + usersArr[i].lastName
        );
      }
    }

    return usersMonthBorn;
  };

  buttonColor = array => {
    let a = array.length;
    let color;
    if (0 <= a && a <= 2) {
      return (color = s.buttonGray);
    } else if (3 <= a && a <= 6) {
      return (color = s.buttonBlue);
    } else if (7 <= a && a <= 10) {
      return (color = s.buttonGreen);
    } else if (11 <= a) {
      return (color = s.buttonRed);
    }
  };

  render() {
    let monthId = this.props.monthItem.id;
    let monthName = this.props.monthItem.month;
    let allUsersList = this.props.allUsersList;
    let filteredList = this.searchMonthUsers(allUsersList, monthId);

    return (
      <div>
        <Button
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          className={this.buttonColor(filteredList)}
        >
          {monthName}
        </Button>
        {this.state.isOpen && (
          <div className={s.userList}>
            {filteredList.map(elem => {
              return <div key={elem}>{elem}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

MonthUsersList.propTypes = {
  monthItem: PropTypes.object,
  allUsersList: PropTypes.array,
};

export default MonthUsersList;
