import React from 'react';
import '../App.css'
export default function UserList({ user_data }) {
  return (
    <div>
      <ul className='displayData'>
        {user_data.map((item) => (
          <button>{item.name}</button>
        ))}
      </ul>
      <ul className='regularData'>
        {user_data.map((item) => (
          <h3>{item.email}</h3>
        ))}
      </ul>
    </div>
  );
}
