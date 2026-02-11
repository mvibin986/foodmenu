import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handlead =() =>{
        navigate("/login");
    }
    const handleus =()=>{
        navigate("/ulog");
    }

  return (
    <div className='home'>
      <button className='ad' onClick={handlead}>Admin</button>
      <button className='us' onClick={handleus}>User</button>
    </div>
  )
}
