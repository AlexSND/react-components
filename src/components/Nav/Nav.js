import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav__item'>
        <NavLink to='/button'>Button</NavLink>
      </li>
    </ul>
  )
}

export default Nav
