import '../styles/components/Header.scss';
import React from 'react'

const Header = () => {
  return (
    
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
        <div className="logo">
        <a href='/'>FREIND AND CO.</a>
        </div>
        <div className="nav">
        <span></span>
      <span></span>
        </div>
    
        </div>
      
      </div>
    </div>
  )
}

export default Header