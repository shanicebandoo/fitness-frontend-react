
const Profile = () => {
  // Placeholder data
  const placeholderData = {
    username: 'JohnDoe',
    name: 'John Doe',
    email: 'johndoe@example.com',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male'
  };

  return (
    <div style={styles.container}>
      <div style={styles.profilePicture}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ygGBdyAMMRTN9mImpgJq3MkVM0W9kLbS3w&s" // Placeholder image URL
          alt="Profile"
          style={styles.image}
        />
      </div>
      <div style={styles.userInfo}>
        <h1>Account Information</h1>
        <p><strong>Username:</strong> {placeholderData.username}</p>
        <p><strong>Name:</strong> {placeholderData.name}</p>
        <p><strong>Email:</strong> {placeholderData.email}</p>
        <p><strong>Date of Birth:</strong> {placeholderData.dateOfBirth}</p>
        <p><strong>Gender:</strong> {placeholderData.gender}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  profilePicture: {
    marginBottom: '20px',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  },
  userInfo: {
    textAlign: 'center',
  },
};

export default Profile;