import React from 'react'
import './dropdownItem.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const DropdownItem = ({ className, children, ...rest }) => {
  return (
    <div className={clsx('DropdownItem', className && className)} {...rest}>
      {children}
    </div>
  )
}

// DropdownItem prop types
DropdownItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  rest: PropTypes.object,
}

export default DropdownItem
