import React from 'react'
import './fieldError.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const FieldError = ({ className, error }) => {
  return <div className={clsx('FieldError', className && className)}>{error}</div>
}

// FieldError Prop Types
FieldError.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string.isRequired,
}

export default FieldError
