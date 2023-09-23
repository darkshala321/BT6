import { useState } from 'react'
import './App.css'
import MaxCharacterInput from './component/MaxCharacter'

function App() {
  return (
    <div>
      <h1>Ứng dụng kiểm tra maxlength</h1>
      <MaxCharacterInput />
    </div>
  );
}
export default App
