import { useState, useEffect } from 'react';
import UserList from './UserList';

function UserProvider() {
  const [user_data, setUser_data] = useState([]);

  // This method is taken from meal example
  const get_data = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      setUser_data(result);
    } catch (err) {
      console.log(`Handling error!`);
      console.log(err);
    }
  };

  // To prevent side effects
  useEffect(() => {
    get_data();
  }, []);

  return (
    <>
      <UserList user_data={user_data} />
    </>
  );
}

export default UserProvider;
