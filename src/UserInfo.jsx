import { Component } from 'react';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Bob',
      profession: 'Plumber',
      luckyNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  changeLuckyNumber = () => {
    this.setState(() => ({
      luckyNumber: Math.floor(Math.random() * 100) + 1 
    }));
  };

  render() {
    return (
      <div>
        <p>Username: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is {this.state.luckyNumber}</p>
        <button onClick={this.changeLuckyNumber}>Generate New Lucky Number</button>
        <br/>
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}

export default UserInfo