import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { HeaderTop } from './headerTop/headerTop'
import { Navbar } from './navbar/navbar'

export function Header() {
  return (
    <header >
      <HeaderTop/>
      <Navbar/>
    </header>
  )
}
