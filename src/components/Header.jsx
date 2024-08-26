import React from 'react'
import MaxWidth from './shared/MaxWidth'
import { Link,Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <MaxWidth>
      <header>
        <nav className='flex justify-center list-none space-x-20 font-medium text-md bg-blue-500 text-white py-4 rounded'>
          <li>
            <Link to='' className='cursor-pointer hover:text-orange-500 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:rounded px-2 py-1'> 
            Home</Link>
          </li>
          <li>
            <Link to='products' className='cursor-pointer hover:text-orange-500 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:rounded px-2 py-1'>
            Products</Link>
          </li>
          <li>
            <Link to='about' className='cursor-pointer hover:text-orange-500 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:rounded px-2 py-1'>About
            </Link>
          </li>
          <li>
            <Link to='contact' className='cursor-pointer hover:text-orange-500 focus:ring-2 focus:ring-gray-700 focus:outline-none focus:rounded px-2 py-1'>Contact
            </Link>
          </li>
        </nav>
        <Outlet/>
      </header>
    </MaxWidth>
  )
}

export default Header
