import React, { useState } from "react";

function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#242424'  // Dark background
    },
    formContainer: {
      background: '#1a1a1a',     // Dark form background
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      width: '100%',
      maxWidth: '400px',
      color: '#ffffff'           // White text
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '8px 0',
      border: '1px solid #444',
      borderRadius: '4px',
      boxSizing: 'border-box',
      backgroundColor: '#333',   // Dark input background
      color: '#ffffff',          // White text for input
      outline: 'none'            // Remove default outline
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#646cff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    },
    label: {
      textAlign: 'left',
      display: 'block',
      marginBottom: '5px',
      color: '#ffffff'           // White text for labels
    },
    heading: {
      color: '#ffffff',          // White text for heading
      marginBottom: '1.5rem'
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>React Form Example</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={styles.label}>Name:</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
