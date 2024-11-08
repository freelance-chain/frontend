/* eslint-disable no-empty-pattern */
import React from 'react'

type NavbarProps = {
    isAuthenticated: boolean;
    onLogout: () => void;
  };

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar