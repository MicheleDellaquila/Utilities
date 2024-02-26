import './navbar.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import NavItem from './navItem/navItem'
import NavItemIcon from './navItemIcon/navItemIcon'

const Navbar = ({ className, children }) => {
  return <nav className={clsx('Navbar', className && className)}>{children}</nav>
}

// Navbar components
Navbar.Item = NavItem
Navbar.ItemIcon = NavItemIcon

// Navbar propTypes
Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Navbar
