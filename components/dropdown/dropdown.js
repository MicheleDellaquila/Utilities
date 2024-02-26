import React from 'react'
import './dropdown.scss'
import PropTypes from 'prop-types'

import DropdownItem from './dropdownItem/dropdownItem'
import DropdownItemLink from './dropdownItemLink/dropdownItemlLink'
import clsx from 'clsx'

const Dropdown = ({ className, dropKey, children }) => {
  return (
    <div key={dropKey} className={clsx('Dropdown', className && className)}>
      {children}
    </div>
  )
}

// subcomponents
Dropdown.Item = DropdownItem
Dropdown.ItemLink = DropdownItemLink

// Dropdown prop types
Dropdown.propTypes = {
  key: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Dropdown
