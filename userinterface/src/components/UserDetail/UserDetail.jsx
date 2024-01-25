import './UserDetail.css';
import PropTypes from 'prop-types';

const UserDetail = ({ selectedUser }) => {
  // Ye batane ki jarurat hai kya?
  return (
    <div className="user-detail-container">
      <h2 className="header">User Details</h2>
      {selectedUser ? (
        <div className="details">
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Address: {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</p>
          <p>Company: {selectedUser.company.name}</p>
          <p>Website: {selectedUser.website}</p>
        </div>
      ) : (
        <p className="placeholder">User Dekhne ke Liye 1 Dabaiye</p>
      )}
    </div>
  );
};

// Ye thoda samajna padega
UserDetail.propTypes = {
  selectedUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    website: PropTypes.string.isRequired,
  }),
};

export default UserDetail;
