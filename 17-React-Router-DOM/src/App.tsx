import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Navbar } from './Compnents/Navbar'
const App = () => {
  return (
    <div>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact'element={<Contact/>}/>
</Routes>

    </div>
  )
}

export default App