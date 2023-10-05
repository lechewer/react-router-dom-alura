
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from './components/Inicio'
import { SobreMim } from './components/SobreMim'
import { Menu } from './components/Menu/Index'
import {Footer}  from './components/Footer'
import { EstruturaPadrao } from './components/EstruturaPadrao'
import { Post } from './components/Post'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route element={<EstruturaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
          <Route path='posts/:id' element={<Post/>}/>
        </Route>
        <Route path='*' element={<div>404</div>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
