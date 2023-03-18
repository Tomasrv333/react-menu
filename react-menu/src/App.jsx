import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar/>
    </>
  )
}

export default App
