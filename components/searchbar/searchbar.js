import React from 'react'
import './searchbar.scss'
import PropTypes from 'prop-types'

import Input from '@ui/input/input'
import { IoIosSearch } from 'react-icons/io'

const Searchbar = ({ placeholder, ...props }) => {
  return (
    <div className='Searchbar'>
      <IoIosSearch className='Searchbar__icon' />
      <Input className='Searchbar__input' type='search' placeholder={placeholder} {...props} />
    </div>
  )
}

// Searchbar prop types
Searchbar.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default Searchbar
