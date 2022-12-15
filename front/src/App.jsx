import React from 'react'
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Reports from '../pages/Reports';


import {Routes, Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/reports" element={<Reports/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App