import React from 'react'
import './navItem.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

const NavItem = ({ className, title, to, ...rest }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? clsx('NavItem NavItem--active', className && className) : 'NavItem'
      }}
      {...rest}
    >
      {title}
    </NavLink>
  )
}

// Nav Item propTypes
NavItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  rest: PropTypes.object,
}

export default NavItem
