import React from 'react'
import Addpages from './Addpages'
import Navbar from './Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home />}/>
          <Route path='/Addpages' element={<Addpages />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App