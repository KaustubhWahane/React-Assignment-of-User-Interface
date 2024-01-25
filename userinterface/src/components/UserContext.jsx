import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userData, loading, error, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
