import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
  const {detailType} = useParams()
  return (
    <div>
      {
        (detailType == 'details')
        ?
        <div>
          <h1>+923106811432</h1>
          <h1>ijazhanif@gmail.com</h1>
        </div>
        :
        (detailType == 'address')
        ?
        <div>
          <h1>Los Angles</h1>
          <h1>United State of America</h1>
        </div>
        :
        ''
      }
      
    </div>
  )
}

export default ContactDetails
