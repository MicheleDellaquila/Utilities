import React from 'react';
import './spinner.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Spinner = ({ className, size = 'lg' }) => {
  const sizeStyle = `Spinner--${size}`;

  return <div className={clsx('Spinner', sizeStyle, className && className)} />;
};

// Spinner prop types
Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Spinner.defaultProps = {
  size: 'lg',
};

export default Spinner;
