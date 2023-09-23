// src/App.js
import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    if (newUsername.length > 20) {
      setUsernameError('Username không được quá 20 ký tự.');
    } else {
      setUsernameError('');
    }
    setUsername(newUsername);
  };

  const handleAddClick = () => {
    if (!username || !age || !address || !avatar) {
      alert('Bạn chưa điền hết các ô còn trống.');
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 10 || ageNum > 100) {
      alert('Age chỉ được điền từ 10 đến 100.');
      return;
    }

    if (address.length > 100) {
      alert('Địa chỉ quá dài.');
      return;
    }

    setUserInfo({
      username,
      age,
      address,
      avatar,
    });
  };

  const handleClearClick = () => {
    setUsername('');
    setAge('');
    setAddress('');
    setAvatar('');
    setUserInfo(null);
  };

  return (
    <div className="App">
      <Input label="Username" value={username} onChange={handleUsernameChange} />
      {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      <Input label="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <Input label="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      <Button text="Add" onClick={handleAddClick} />
      <Button text="Clear" onClick={handleClearClick} />
      {userInfo && (
        <div>
          <h2>Thông tin:</h2>
          <p>Username: {userInfo.username}</p>
          <p>Age: {userInfo.age}</p>
          <p>Address: {userInfo.address}</p>
          <img src={userInfo.avatar} alt="Avatar" style={{ width: '30%' }} />
        </div>
      )}
    </div>
  );
}

export default App;