import React from 'react';
import User from './User';
import './User.css';


const App = () => {
  return (
    <div>
      <h1 className='user-list'>Employee List</h1>
      <User />
    </div>
  );
};

export default App;
