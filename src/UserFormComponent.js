import React, { Component } from 'react';

class UserFormComponent extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  }

  updateFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  updateLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  updateUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var { firstName, lastName, userName } = this.state;
    this.props.addUserHandler({
        firstName,
        lastName,
        userName
      }
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input type='text' 
          value={this.state.firstName} 
          onChange={this.updateFirstName}/>
        <br />
        <label>Last Name:</label>
        <input type='text' 
          value={this.state.lastName}
          onChange={this.updateLastName} />
        <br />
        <label>User Name:</label>
        <input type='text' 
          value={this.state.userName} 
          onChange={this.updateUserName} />
        <br />
        <button
          disabled={
            (this.state.firstName === ''
              || this.state.lastName === ''
              || this.state.userName === '')
          }
          type='submit'
          >Add User</button>
      </form>
    )
  }
}

export default UserFormComponent;