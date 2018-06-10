import React, { Component } from 'react';
import UserFormComponent from './UserFormComponent';
import UsersList from './UsersList';

class UsersComponent extends Component {
  state = {
    users: [
      {
        FirstName: 'Sebastian', 
        LastName: 'Ferrari', 
        UserName: 'sebastianferrari',
        GamesPlayed: 0
      },
      {
        FirstName: 'Melina', 
        LastName: 'Vincelli', 
        UserName: 'melinavincelli',
        GamesPlayed: 0
      }
    ],
    hidePlayedGames: false
  }

  addUserHandler = (user) => {
    // console.log(typeof user);
    // var { firstName, lastName, userName } = user;
    // console.log(user.firstName);
    // console.log(firstName);
    // var newArr = this.state.users.slice();
    // newArr.push({
    //   FirstName: user.firstName,
    //   LastName: user.lastName,
    //   UserName: user.userName,
    //   GamesPlayed: 0
    // });
    // this.setState({
    //   users: newArr
    // })
  }

  hidePlayedGamesHandler = () => {
    this.setState((prevState, props) => ({
      hidePlayedGames: !prevState.hidePlayedGames
    }))
  }

  render() {
    return (
      <div>
        <UserFormComponent addUserHandler={this.addUserHandler} />
        <hr />
        <button onClick={this.hidePlayedGamesHandler}>{this.state.hidePlayedGames
          ? 'Show'
          : 'Hide'} the number of games played</button>
        <UsersList users={this.state.users} />
      </div>
    )
  }
}

export default UsersComponent;