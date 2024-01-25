import { useState } from 'preact';
import './UserDetail.css'; // Import the CSS file

const UserDetail = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div class="user-detail">
      <h3 onClick={toggleVisibility} class="user-name" style={{ cursor: 'pointer' }}>
        {user.name}
      </h3>
      {isVisible && (
        <div class="details">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
