import './App.css';
import React, { useState } from 'react'
import GetColor from './component/GetColor';

const App = () => {
  const [UIColor,setUIColor] = useState(null)

  const getColor = (color) => {
    setUIColor(color)
  }
  return (
    <div className='App'>
    <h1 className='title'>GET COLOR</h1>
      <div className='color-container' style={{background:`${UIColor}`}}></div>
      <GetColor getColor={getColor} />
    </div>
  )
}

export default App
