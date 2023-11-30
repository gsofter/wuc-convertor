import React from 'react'

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className='bg-cyan-700'>
      <div className='base-container py-6'>
        <h1 className='text-3xl font-semibold text-white'>{title}</h1>
        {subtitle && <p className='mt-2 text-gray-300'>{subtitle}</p>}
      </div>
    </div>
  )
}

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default PageHeader
