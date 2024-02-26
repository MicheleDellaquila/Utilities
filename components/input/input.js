import React from 'react'
import './input.scss'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Input = React.forwardRef(({ className, ...rest }, ref) => {
  return <input ref={ref} className={clsx('Input', className && className)} {...rest} />
})

// Input PropTypes
Input.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.object,
}

export default Input
