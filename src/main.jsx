import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route,createBrowserRouter,RouterProvider, Routes, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ContactDetails from './components/ContactDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Header/>}>
        <Route path='' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}>
             <Route path=':detailType' element={<ContactDetails/>}/>
        </Route>
        <Route path='/*' element={<h1 className='text-black border-2 border-black rounded'>Page not found</h1>}/>
      </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
