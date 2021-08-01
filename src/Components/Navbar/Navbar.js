import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import "./Navbar.css";


class Navbar extends Component {
  state={clicked:false}
  handleClick=()=>{
    this.setState({clicked : !this.state.clicked})
  }
  render()
  {
  return (
    <nav className="NavbarItems">
    <h1 className="navbar-logo">
    <i class="fas fa-laptop-code"></i> HIRE DEVELOPER
    </h1>
    <div className="menu-icon" onClick={this.handleClick}>
      <i className={this.state.clicked ?'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    <ul  className={this.state.clicked ?'nav-menu active' :'nav-menu'}>
    <li className="nav-item active">
      
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-home">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="fas fa-info">
                </i>About me
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service" exact>
                <i 
                className="fas fa-clone">
                </i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Projects" exact>
                <i 
                className="fas fa-tasks">
                </i>Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="fas fa-address-book">
                </i>Contact Us
              </NavLink>
            </li>
        </ul>
    
    
  </nav>
  )
}
}

export default Navbar




  
 

