import React from "react"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="#" alt="" />
        <span>Paynet.io</span>
      </div>
      <div className="links">
        <a href="www.google.com">Fees</a>
        <a href="www.google.com">Careers</a>
        <a href="www.google.com">FAQ</a>
        <a href="www.google.com">Contacts</a>
        <a href="www.google.com">About</a>
      </div>
      <div className="signup">
        <a href="www.google.com">Sign up </a>
        <span> / </span>
        <a href="www.google.com"> Log In</a>
      </div>
    </div>
  )
}

export default NavBar
