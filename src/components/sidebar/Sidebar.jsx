import React from 'react'
import "../../styles/components/sidebar.sass";
import myFunction from '../variables/Variables';

const Sidebar = () => {
  return (
    
    <nav className="navlist" id="myNavList">
      <button onClick= { <myFunction /> }>
        <i className="bx bx-menu" id="menu-icon"></i>
      </button>
      <ul>
        <li>
          <i className='bx bxs-home'></i>
          <a href="#" data-text="&nbsp;Home">&nbsp;Home</a>
        </li>
        <li>
          <i className='bx bxs-user'></i>
          <a href="#" data-text="&nbsp;About">&nbsp;About</a>
        </li>
        <li>
          <i className='bx bxs-briefcase-alt-2'></i>
          <a href="#" data-text="&nbsp;Portfolio">&nbsp;Portfolio</a>
        </li>
        <li>
          <i className='bx bxs-chat'></i>
          <a href="#" data-text="&nbsp;Contact">&nbsp;Contact</a>
        </li>
        <li>
          <i className='bx bxs-invader'></i>
          <a href="#" data-text="&nbsp;Ideas">&nbsp;Ideas</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar