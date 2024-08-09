import React from 'react';

const Banner = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww"
        alt="Banner"
        style={styles.bannerImage}
      />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>JOIN SANITY FITNESS TODAY</h1>
        <p style={styles.subheading}>Your journey to a healthier you starts here</p>
      </div>
    </div>  
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
    width: '100%',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    zIndex: 0,
  },
  heading: {
    fontSize: '2.8rem',
    margin: 0,
  },
  subheading: {
    fontSize: '2rem',
    margin: '10px 0 0 0',
  },
};

export default Banner;