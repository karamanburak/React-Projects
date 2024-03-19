import React, { useState } from 'react'

const GetColor = ({getColor}) => {
    const [activeColor,setActiveColor] = useState("")

    const handleChange = (e) => {
        const {value} = e.target;
        setActiveColor(value)
        getColor(value)
    }


  return (
    <div>
        <input 
        type="text" 
        id="input"
        onChange={handleChange}
        value={activeColor}
              placeholder='Please enter a color'
        />
    </div>
  )
}

export default GetColor