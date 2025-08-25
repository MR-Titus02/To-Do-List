import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer/>
    </>
  )
}

export default App
