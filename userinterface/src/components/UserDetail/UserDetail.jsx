import { useState, useContext } from 'react';
import { UserContext } from '../UserContext';

const UserDetail = () => {
  const { userData } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (id) => {
    setSelectedUserId(id);
  };

  const selectedUser = userData.find((user) => user.id === selectedUserId);

  return (
    <div>
      <h2>User Detail</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3>{selectedUser.name}</h3>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
