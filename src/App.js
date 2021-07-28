import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{value}</h1>
        <button onClick={()=>{setValue(value+1)}}>Click-me!</button>
      </header>
    </div>
  );
}