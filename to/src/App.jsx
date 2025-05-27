import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listodos from './todos/listodos';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Editform from './component/Editform';
import Deleteform from './component/Deleteform';
import Showform from './component/Showform';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listodos />} />
          <Route path="/edit/:id" element={<Editform />} />
          <Route path="/delete/:id" element={<Deleteform />} />
          <Route path="/show/:id" element={<Showform/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
