import React from 'react'
import CustomLink from '../Link'

import './styles.scss'

const Dropdown = ({ children, items, ...props }) => (
  <div class="dropdown">
    <button class="dropbtn">{children}</button>
    <div class="dropdown-content">
      {items.map((item) => (
        <CustomLink href="#" size="sm" hover>
          {item}
        </CustomLink>
      ))}
    </div>
  </div>
)

export default Dropdown
