import React from 'react';
import './UsersList.css';

function UserList(props) {
  console.log(props.users)
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {props.users.map(user => (
          <li key={user.UserName}>
            {user.UserName} played {user.GamesPlayed} games
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;