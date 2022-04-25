import { Button } from '@mui/material'
import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
const Marker = () => {
  const sayHello = ()=> {
    console.log('Hola')
  }
  return (
    <div>
      {/* <strong style={{fontSize:'20px',color: "red"}}
        onClick={sayHello}>	MyTirle</strong> */}

      <RoomIcon sx={{ fontSize: 30, color: 'red'}}/>
    </div>
  )
}

export default Marker