import React, { useState } from 'react'
import './navbar.css'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const openSideNav = (event: React.SyntheticEvent) => {
    setSideBarOpen(true)
  }

  const closeSideNav = (event: React.SyntheticEvent) => {
    setSideBarOpen(false)
  }

  return (
    <div>
      <header>
        <div className="header-hamburger">
          <a href="/#" onClick={openSideNav}>
            <div></div>
            <div></div>
            <div></div>
          </a>
        </div>
        <div className="header-logo">
          <h2>
            TODO<span className="yellow-text">+</span>
          </h2>
        </div>
        <div className="header-nav">
          <nav>
            <a href="/#" className="header-nav-active">
              Dashboard
            </a>
            <a href="/#">Whats today?</a>
          </nav>
        </div>
      </header>
      <Sidebar sideBarOpen={sideBarOpen} closeSideNav={closeSideNav} />
    </div>
  )
}
