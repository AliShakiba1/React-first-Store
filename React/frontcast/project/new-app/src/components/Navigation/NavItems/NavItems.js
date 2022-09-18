import React from 'react'
import NavItem from './NavItem/NavItem'
import './NavItems.css'

const NavItems = props => {
  return (
    <ul className="Nav-items">
      <NavItem link="/">Shopping</NavItem>
<<<<<<< HEAD
      <NavItem link="/">Checkout</NavItem>
=======
      <NavItem link="/checkout">Checkout</NavItem>
      <NavItem link="/account">Account</NavItem>
>>>>>>> 3cf3cec... adding acount page
    </ul>
  )
}

export default NavItems
