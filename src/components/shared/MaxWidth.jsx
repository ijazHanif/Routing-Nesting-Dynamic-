import React from 'react'

const MaxWidth = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      {children}
    </div>
  )
}

export default MaxWidth
