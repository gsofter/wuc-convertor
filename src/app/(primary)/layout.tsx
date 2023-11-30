import { Metadata } from 'next'
import * as React from 'react'

import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

import Providers from '@/providers/Provider'

export const metadata: Metadata = {
  title: 'Wuc Price Convertor',
  description: 'Wuc Price Convertor',
}

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Providers>
      <div className='flex flex-col min-h-screen mx-auto'>
        <div className='flex-grow'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </Providers>
  )
}

export default MainLayout
