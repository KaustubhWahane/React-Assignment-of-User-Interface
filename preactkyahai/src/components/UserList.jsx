// UserList.jsx
import { h, useContext, useState } from 'preact';
import { UserContext } from './UserProvider';
import UserDetail from './UserDetail';
import './UserList.css'; 

const UserList = () => {
  const { userData } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div class="user-list-container">
      <h2 class="list-title">User List:</h2>
      <ul class="user-list">
        {userData.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            class="list-item"
            style={{ cursor: 'pointer' }}
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export default UserList;
