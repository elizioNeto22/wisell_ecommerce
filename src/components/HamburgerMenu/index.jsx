import React, { useState } from 'react'
import CustomLink from '../Link'

import './styles.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        <li className="menu__item">
          <CustomLink href="#">Agrícola</CustomLink>
        </li>
        <li className="menu__item">
          <CustomLink href="#">Ferragens</CustomLink>
        </li>
        <li className="menu__item">
          <CustomLink href="#">Medicamentos</CustomLink>
        </li>
        <li className="menu__item">
          <CustomLink href="#">Defensivos</CustomLink>
        </li>
        <li className="menu__item">
          <CustomLink href="#">Fertilizantes</CustomLink>
        </li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
