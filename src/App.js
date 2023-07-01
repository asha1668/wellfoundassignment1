import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Brand Name</span>
        <button className="get-users-btn" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      <div className="user-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          users.map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} className="avatar" />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>Email: {user.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;

