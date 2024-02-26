import React from 'react'
import './fieldLabel.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const FieldLabel = ({ className, label, htmlFor, required = false }) => {
  return (
    <label htmlFor={htmlFor} className={clsx('FieldLabel', className && className)}>
      {label}
      {required && <span className='FieldLabel__required'>*</span>}
    </label>
  )
}

// FieldLabel Prop Types
FieldLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
}

// Default props
FieldLabel.defaultProps = {
  required: false,
}

export default FieldLabel
