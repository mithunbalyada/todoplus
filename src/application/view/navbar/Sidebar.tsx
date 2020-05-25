import React from 'react'
import './sidebar.css'

type SidebarProps = {
  sideBarOpen: boolean
  closeSideNav: (e: React.SyntheticEvent) => void
}

export const Sidebar = (props: SidebarProps) => {
  if (props.sideBarOpen) {
    return (
      <aside className="sidenav">
        <div className="sidenav-close">
          <a href="/#" onClick={props.closeSideNav}>
            &times;
          </a>
        </div>
        <nav>
          <a href="/#">Dashboard</a>
          <a href="/#">Whats today?</a>
        </nav>
      </aside>
    )
  }

  return <> </>
}
