import logo from './logo.svg';
import './App.css';
import { State } from './components/state'
import { UseState } from './components/useState'
import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <State></State>
      <UseState title={value} action={()=>{setValue(value+1)}}></UseState>
    </div>
  );
}

export default App;
