import React from 'react'
import './field.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

// subcomponents
import FieldLabel from './fieldLabel/fieldLabel'
import FieldError from './fieldError/fieldError'

// Field
const Field = ({ className, children }) => {
  return <div className={clsx('Field', className && className)}>{children}</div>
}

// Attach subcomponents to the field
Field.Label = FieldLabel
Field.Error = FieldError

// Field Prop Types
Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Field
