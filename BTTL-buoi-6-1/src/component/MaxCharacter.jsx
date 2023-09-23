import React, { useState } from 'react';

function MaxCharacterInput() {
  const [inputValue, setInputValue] = useState('');
  const [inputStyle, setInputStyle] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    let value = e.target.value;

    if (value.length > 20) {
      value = value.slice(0, 20);
      setInputStyle({ backgroundColor: 'red' });
      alert('Bạn chỉ được nhập tối đa 20 ký tự');
    } else {
      setInputStyle({});
      setAlertMessage('');
    }

    setInputValue(value);
  };

  return (
    <>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <div style={{ color: 'red' }}>{alertMessage}</div>
    </div>
    <h1> {inputValue} </h1>
    <div> {inputValue.length} </div>
    </>
  );
}

export default MaxCharacterInput;