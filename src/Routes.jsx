
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from './components/Inicio'
import { SobreMim } from './components/SobreMim'
import { Menu } from './components/Menu/Index'
import {Footer}  from './components/Footer'
import { EstruturaPadrao } from './components/EstruturaPadrao'
import { Post } from './components/Post'
import { NaoEncontrada } from './components/NaoEncontrada'
import ScrollToTop from './components/ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      
      <Routes>

        <Route element={<EstruturaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
        </Route>

        <Route path='posts/:id' element={<Post/>}/>
        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
