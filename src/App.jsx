import { useState } from 'react'
import './index.css'
import Header from './componests/Header'
import Main from './componests/Main'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Artist from './pages/Artist'
import Song from './pages/Song'
import Artists from './pages/Artists'
import Songs from './pages/songs'

const App = () => {
   return <>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/artist/:id" element={<Artist/>}/>
            <Route path="/songs" element={<Songs/>}/>
            <Route path="/song/:id" element={<Song/>}/>
            <Route path="/artists" element={<Artists/>}/>
         </Routes>
      </BrowserRouter>
   </> 
}
export default App

