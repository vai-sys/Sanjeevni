import About from './components/About'
import Home from './components/Home'
import React from 'react'
import Bard from './components/Bard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Practise from './components/Practise'
import Remedies from './components/Remedies'
import Community from './components/Community'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
  
    {
      path: "/about",
      element: <><Navbar/><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact /></>
    },
   {
     path:"/aiguide",
     element:<><Navbar/><Bard/></>
   },
    {
      path: "/blog",
      element: <><Navbar/><Blog /></>
    },
    {
      path:"/ayurvedicPractices",
      element:<><Navbar/><Practise/></>
    },
    {
      path:"/remedies",
      element:<><Navbar/><Remedies/></>      
    },
    {
      path:"/community",
      element:<><Navbar/><Community/></>
    }
     
    
   
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App