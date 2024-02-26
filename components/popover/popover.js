import React, { forwardRef } from 'react'
import Proptypes from 'prop-types'

import { Popover as PopoverContainer } from 'react-tiny-popover'

const Popover = forwardRef(({ isOpen, children, content, positions }, ref) => {
  return (
    <PopoverContainer ref={ref} isOpen={isOpen} positions={positions} content={content}>
      {children}
    </PopoverContainer>
  )
})

// Popover prop types
Popover.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
  content: Proptypes.node.isRequired,
  positions: Proptypes.array,
}

export default Popover
