import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'
import banner from './assets/banner.jpg';
import seats from './assets/seats.png';

function App() {
  return (
    <div>
      <img src={banner} className="banner" />
      <h1 className="heading">Upcoming Movies</h1>
      <Board />
      <img src={seats} className="seats"/>
    </div>
  )
}

export default App
