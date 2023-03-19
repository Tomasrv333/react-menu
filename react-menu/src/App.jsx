import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Menu from './Pages/Menu'
import Ubicacion from './Pages/Ubicacion'
import Domicilios from './Pages/Domicilios'
import Informacion from './Pages/Informacion'
import Contacto from './Pages/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/ubicacion' element={<Ubicacion/>}/>
          <Route path='/domicilios' element={<Domicilios/>}/>
          <Route path='/informacion' element={<Informacion/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
