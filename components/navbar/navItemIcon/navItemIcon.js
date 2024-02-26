import React from 'react'
import './navItemIcon.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { NavLink } from 'react-router-dom'

const NavItemIcon = ({ className, title, icon, to, ...rest }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? clsx('NavItemIcon NavItemIcon--active', className && className)
          : clsx('NavItemIcon', className && className)
      }}
      {...rest}
      to={to}
    >
      {icon}
      {title}
    </NavLink>
  )
}

// Nav Item propTypes
NavItemIcon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  rest: PropTypes.object,
}

export default NavItemIcon
