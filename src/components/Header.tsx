import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import SearchBar from './SearchBar'
import Carticon from './CartIcon'
import MobileMenu from './toggleButton'

const Header = () => {
  return (
    <header className = "bg-white border-b border-b-gray-400 py-5">
      <Container className = "flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className = "w-auto md:2-1/3 flex items-center justify-center gap-2.5">
        <MobileMenu/>
        <Logo>SOLUE SHOES</Logo>        
        </div>        
        <div className = "w-auto md:2-1/3 flex items-center justify-end gap-5">
          <SearchBar/>
          <Carticon/>
          <div>
            <button className = "text-sm font-semibold hover:text-darkColor hoverEffect">Login</button>
          </div>
          
        </div>
      </Container>      
    </header>
  )
}

export default Header
