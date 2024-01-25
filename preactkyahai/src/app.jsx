import { h, render } from 'preact';
import { UserProvider } from './components/UserProvider';
import UserList from './components/UserList';

function App() {
  return (
    <UserProvider>
      <div class="app-container">
        <h1 class="app-title">Preact User Data</h1>
        <UserList />
      </div>
    </UserProvider>
  );
}

// Mount the App component
render(<App />, document.getElementById('app'));

export default App;
