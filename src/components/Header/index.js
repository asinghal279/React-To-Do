import React from 'react'
import './__Header.css'

export default React.memo(function Header(props) {
  
  return (
    <h1 className='heading'>{props.text}</h1>
  )
})
