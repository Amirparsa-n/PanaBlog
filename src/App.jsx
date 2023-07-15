import React from 'react'

import { Route, Routes } from 'react-router-dom';

{console.log("%c\n    ⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⡀\n⠀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀\n⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣷⣄⣀⣀⣀⣀⣀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣷⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣨⣿⣿⣿⣿⡇\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏\n⠀⠀⠙⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠁\n\n⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n\n\n⠀⠀⠀⠀⠀   Amirparsa Naghibi\n", "font-family:monospace;color:#2065BB;font-size:16px;")}

// graphQL
import {gql, useQuery} from '@apollo/client'

// Component
import Navbar from './components/layout/Navbar';
import HomePage from './page/HomePage';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <div style={{height: '2000px'}}></div>
    </>
  )
}

export default App
