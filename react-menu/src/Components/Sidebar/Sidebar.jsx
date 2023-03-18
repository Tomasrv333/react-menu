import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <Link to='#' className='sidebar__icon'>
          <FaBars/>
        </Link>
      </div>
    </>
  )
}

export default Sidebar