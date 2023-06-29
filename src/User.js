import React, { useState, useEffect } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        className="user-list-input"
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-container">
            <div className="user-card">
              <div className="avatar-container">
                <img className="avatar" src={user.avatar} alt={user.first_name} />
                <span className="user-id">{user.id}</span>
              </div>
            </div>
            <p className="first-name">{user.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;