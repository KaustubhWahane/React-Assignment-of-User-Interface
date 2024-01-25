import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import PropTypes from 'prop-types';
import './UserList.css';

const UserList = ({ setSelectedUser }) => {
  const { userData, loading, error, fetchUserData } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }); 

  // Page Sabse Pehele Render hote waqt
  if (loading) {
    return (
      <div className="user-list-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  // Page me render hote waqt koi galti hui toh
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Ye wala search ke waqt kaam karta hai
  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <h2 className="header">All Users</h2>
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="user-list">
        {filteredUsers.map((user) => (
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

UserList.propTypes = {
  setSelectedUser: PropTypes.func.isRequired,
};
export default UserList;
