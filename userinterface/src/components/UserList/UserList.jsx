import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';

const UserList = () => {
  const { userData, loading, error, fetchUserData } = useContext(UserContext);

  const fetchData = async () => {
    try {
      await fetchUserData();
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
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
    <div>
      <h2>User List</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
