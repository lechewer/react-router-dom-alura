
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from './components/Inicio'
import { SobreMim } from './components/SobreMim'
import { Menu } from './components/Menu/Index'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
