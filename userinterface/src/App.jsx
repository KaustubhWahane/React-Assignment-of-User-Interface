import { useState } from 'react';
import { UserProvider } from './components/UserContext';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';

function App(){
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserProvider>
      <div>
        <UserList setSelectedUser={setSelectedUser} />
        <UserDetail selectedUser={selectedUser} />
      </div>
    </UserProvider>
  );
}

export default App;
