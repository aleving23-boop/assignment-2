import { Component } from 'react';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Bob',
      profession: 'Plumber'
    };
  }

  render() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return (
      <div>
        <p>Username: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is {randomNumber}</p>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}

export default UserInfo