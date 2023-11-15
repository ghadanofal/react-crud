import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './component/users/Index'
import Create from './component/users/Create'
import Details from './component/users/Details'
import Update from './component/users/Update'
import Home from './component/users/Home'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/index" element={<Index/>}/>
        <Route path="/users/create" element={<Create/>}/>
        <Route path="/users/:id" element={<Details/>}/>
        <Route path="/users/update/:id" element={<Update/>}/>
        <Route path='*' element={<p>page not found</p>}/>
      </Routes>
    </>
  )
}

export default App
