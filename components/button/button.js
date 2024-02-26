import React from 'react'
import './button.scss'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({
  className,
  type = 'button',
  disabled = false,
  variant,
  size,
  onClick,
  children,
  ...rest
}) => {
  const buttonStyle = `Btn Btn--${variant} Btn--${size}`

  return (
    <button
      className={clsx(buttonStyle, className && className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

// Button PropTypes
Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  rest: PropTypes.object,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
}

export default Button
