import React from 'react'

import { cn } from '@/lib/utils'

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer id='App:Footer' className={cn('base-container')}>
      <p>&copy; {new Date().getFullYear().toString()} by Gsofter</p>
    </footer>
  )
}

interface FooterProps {}

export default Footer
