'use client'

import cn from 'classnames'
import React from 'react'

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header id='App:Header' className={cn('bg-white base-container')}>
      {/* Add elements for header section here */}
    </header>
  )
}

interface HeaderProps {}

export default Header
