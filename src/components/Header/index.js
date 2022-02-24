import React from 'react'
import './__Header.css'

export default function Header(props) {
  return (
    <h1 className='heading'>{props.text}</h1>
  )
}
