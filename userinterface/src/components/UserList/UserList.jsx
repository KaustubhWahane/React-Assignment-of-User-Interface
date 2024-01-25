// UserList.js
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useEffect } from 'react';
import './UserList.css';

const UserList = ({ setSelectedUser }) => {
  const { userData, loading, error, fetchUserData } = useContext(UserContext);

  const fetchData = async () => {
    try {
      await fetchUserData();
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  const showDetails = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchData();
  }); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="user-list-container">
      <h2 className="header">All Users</h2>
      <ul className="user-list">
        {userData.map((user) => (
          <li key={user.id}>
            <button className="user-button" onClick={() => showDetails(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
