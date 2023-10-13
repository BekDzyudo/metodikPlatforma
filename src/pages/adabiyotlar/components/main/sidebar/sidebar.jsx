import React from 'react'
import { NavLink } from 'react-router-dom'

export function Sidebar() {

  return (
    <div className='sidebar'>
      <form action="" className="searchForm">
        <input type="text" placeholder='izlash...'/>
      </form>
      <ul className='list'>

            <NavLink className="item" to="/all">Barchasi <div className="circle"></div></NavLink>

            <NavLink className="item" to="/darsliklar">Darsliklar <div className="circle"></div></NavLink>

            <NavLink className="item" to="/qollanmalar">O‘quv qo‘llanmalar <div className="circle"></div></NavLink>

            <NavLink className="item" to="/adabiyotlar">Qo‘shimcha adabiyotlar <div className="circle"></div></NavLink>

            <NavLink className="item" to="/badiiyAdabiyotlar">Badiiy adabiyotlar <div className="circle"></div></NavLink>
            
      </ul>
    </div>
  )
}
