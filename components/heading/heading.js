import React from 'react';
import './heading.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ className, heading, title }) => {
  const TagHeading = `${heading}`;

  return (
    <TagHeading
      data-id={TagHeading}
      className={clsx('Heading', className && className)}
    >
      {title}
    </TagHeading>
  );
};

// Heading PropTypes
Heading.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
