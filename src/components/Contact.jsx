import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import MaxWidth from './shared/MaxWidth'

const Contact = () => {
  return (
    <MaxWidth>
    <div className='flex justify-center space-x-2 pt-5'>
        <button className='border-2 border-gray-500 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 duration-300 focus:bg-gray-700 focus:text-white '>
          <Link to='details'>Number & Emails</Link>
        </button>
        <button className='border-2 border-gray-500 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 duration-300 focus:bg-gray-700 focus:text-white '>
           <Link to='address'>Home Password</Link>
        </button>
    </div>
      <div className='flex justify-center pt-5 w-full text-center'>
        <Outlet/>
      </div>
    </MaxWidth>
  )
}

export default Contact
