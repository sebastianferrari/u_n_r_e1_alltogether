import React, { Component } from 'react';
import UserFormComponent from './UserFormComponent';
import UsersList from './UsersList';
import './UsersComponent.css';

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
    hidePlayedGames: false,
    error: '',
    usersLength: 2
  }

  addUserHandler = (user) => {
    const result = this.validateUserName(user.userName);
    if (result) {
      var newArr = this.state.users.slice();
      newArr.push({
        FirstName: user.firstName,
        LastName: user.lastName,
        UserName: user.userName,
        GamesPlayed: 0
      });
      this.setState({
        users: newArr,
        usersLength: newArr.length,
        error: ''
      })
    }
  }

  validateUserName = (userName) => {
    console.log('Validating user ->', userName);
    var user = this.state.users.filter(user => user.UserName === userName);
    console.log('Filtered user ->', user);
    if (user.length > 0) {
      console.log(user);
      this.setState({
        error: 'The user name is already in use, please choose another one'
      })
      return false;
    }
    return true;
  }

  hidePlayedGamesHandler = () => {
    this.setState((prevState, props) => ({
      hidePlayedGames: !prevState.hidePlayedGames
    }))
  }

  render() {
    return (
      <div>
        <UserFormComponent 
          addUserHandler={this.addUserHandler}
          error={this.state.error}
          usersLength={this.state.usersLength} 
        />        
        <hr />
        <button 
          onClick={this.hidePlayedGamesHandler}>
            {this.state.hidePlayedGames
              ? 'Show'
              : 'Hide'} the number of games played
        </button>
        <UsersList 
          users={this.state.users} 
          hidePlayedGames={this.state.hidePlayedGames}
        />
      </div>
    )
  }
}

export default UsersComponent;