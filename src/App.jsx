import React from 'react'

import { Route, Routes } from 'react-router-dom';

{console.log("%c\n    ⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⡀\n⠀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀\n⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣷⣄⣀⣀⣀⣀⣀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⡇\n⣿⣿⣿⣿⣷⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣨⣿⣿⣿⣿⡇\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏\n⠀⠀⠙⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠁\n\n⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n\n\n⠀⠀⠀⠀⠀   Amirparsa Naghibi\n", "font-family:monospace;color:#2065BB;font-size:16px;")}

// graphQL
import {gql, useQuery} from '@apollo/client'

// Component
import Navbar from './components/layout/Navbar';
import HomePage from './page/HomePage';
import Footer from './components/layout/Footer';
import Blogs from './page/Blogs';
import PostDetails from './page/PostDetails';
import AuthorDetails from './page/AuthorDetails';

import ScrollToTop from './components/shared/ScrollToTop';

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:slug' element={<PostDetails />}/>
        <Route path='/authors/:slug' element={<AuthorDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
