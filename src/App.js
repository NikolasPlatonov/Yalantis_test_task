import React, { Component } from 'react';
import './App.css';
import monthsList from './monthsWithId.json';
import MonthUsersList from './components/MonthUsersList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allUsersList: null,
    };
  }

  async componentDidMount() {
    const url = 'https://yalantis-react-school.herokuapp.com/task0/users';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ allUsersList: data, loading: false });
  }

  render() {
    let allUsersList = this.state.allUsersList;

    return (
      <div>
        {this.state.loading || !this.state.allUsersList ? (
          <div>LOADING...</div>
        ) : (
          <div className="main">
            {monthsList.map(item => {
              return (
                <div key={item.id}>
                  <MonthUsersList
                    monthItem={item}
                    allUsersList={allUsersList}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
