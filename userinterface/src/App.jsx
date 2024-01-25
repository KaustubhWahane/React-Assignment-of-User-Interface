import { UserProvider } from './components/UserContext';
import UserList from './components/UserList/UserList';  
import UserDetail from './components/UserDetail/UserDetail';  

const App = () => {
  return (
    <UserProvider>
      <div>
        <UserList />
        <UserDetail />
      </div>
    </UserProvider>
  );
};

export default App;
