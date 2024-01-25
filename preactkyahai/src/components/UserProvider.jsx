import { createContext, Component, render } from 'preact';
import UserList from './UserList';

const UserContext = createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  async componentDidMount() {
    try {
      // Fetch user data from the provided API using async/await
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      this.setState({ userData: data });

      // Display user data to the console
      console.log('User Data:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  render() {
    const { children } = this.props;

    // Provide user data to other components
    return (
      <UserContext.Provider value={{ userData: this.state.userData }}>
        {children}
        {/* Include the UserList component */}
        <UserList />
      </UserContext.Provider>
    );
  }
}

// Mount the UserProvider component
render(
  <UserProvider>
    {/* Placeholder for any additional components */}
  </UserProvider>,
  document.getElementById('app')
);
