import React, { Component } from 'react';

class UserFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: ''
    }
  }

  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      userName: ''
    })
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

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log(prevProps.usersLength + ' ' + this.props.usersLength)
    if (prevProps.usersLength !== this.props.usersLength) {
      console.log('Force Update running')
      this.clearForm();
    }
  }

  render() {
    let errorMessage = ''
    if (this.props.error !== '') {
      errorMessage = (<div className='alert'>{this.props.error}</div>);
    }

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
          <br />
          {errorMessage}
      </form>
    )
  }
}

export default UserFormComponent;