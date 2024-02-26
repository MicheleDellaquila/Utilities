import React from 'react'
import './dropdownItemLink.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const DropdownItemLink = ({ className, children, to, ...rest }) => {
  return (
    <Link className={clsx('DropdownItemLink', className && className)} to={to} {...rest}>
      {children}
    </Link>
  )
}

// DropdownItemLink prop types
DropdownItemLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  rest: PropTypes.object,
}

export default DropdownItemLink
