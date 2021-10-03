import React, { useState } from 'react'
import { data } from '../../data'
import './NavBar.css'
import { NavItem } from './NavItem'
export const NavBar = () => {

  const [active, setActive] = useState(false)
  const mobileMenu = () => {
    setActive(!active)
    setActiveCar(false)
  }
  const [activeCar, setActiveCar] = useState(false)

  const openCar = () => {
    setActiveCar(!activeCar)
    setActive(false)
  }

  
 
 
  return (
    <nav className='navbar'>
      <h1 href="#" className="nav-logo">Perfect Store</h1>

      <div className="navbar-2">
        <div className="car-burger">
          <div href="/" className="cart" onClick={openCar}>
            <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{data.length || 0}</span>
            <i class="fas fa-shopping-bag icon"></i>
          </div>
          <div className={activeCar ? 'car active' : 'car'}>

            {/* PRODUCTSS----------------------------------------------------------------- */}
            <div className={activeCar ? 'nav-menu active scroll' : 'nav-menu scroll'}>
              {/* Product start--------------------------------------------------------------------------------------- */}

              <div className='container content'>
                {data.map(data => (
                  <NavItem data={data}/>
                ))}
                <span className="btn btn-danger w-100">TOTAL 100</span>
              </div>
              {/* -------------------Product end */}
            </div>
          </div>
          <div className={active ? 'hamburger active' : 'hamburger'} onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <p role="button" className="nav-link">Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link">Home</p>

          </li>
          <li className="nav-item">
            <p className="nav-link">Home</p>

          </li>

        </ul>
      </div>

    </nav>

  )
}