import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./rigthSideBar.css"

export default function RigthSideBar(){
  const[sidebar, setSidebar] = useState(false)

  function showSidebar(){
    return setSidebar(!sidebar)
  }

        return(
        <div id="right-sidebar" className={sidebar ? "sidebar active" : "sidebar"}>
          <button className='hamburger' type="button" onClick={showSidebar}><div></div></button>
          <ul onClick={showSidebar}>
            <li className="menu-item">Home</li>
            <li className="menu-item">Service</li>
            <li className="menu-item">Contact</li>
          </ul>
        </div>
        );
}