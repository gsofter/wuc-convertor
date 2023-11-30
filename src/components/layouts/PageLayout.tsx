import React from 'react'

import PageHeader from './PageHeader'

const PageLayout: React.FC<PageLayoutProps> = ({ pageTitle, pageSubtitle, children }) => {
  return (
    <div>
      {pageTitle && <PageHeader title={pageTitle} subtitle={pageSubtitle} />}
      <div className='page-container min-h-[calc(100vh-150px)]'>{children}</div>
    </div>
  )
}

interface PageLayoutProps extends React.PropsWithChildren {
  pageTitle?: string
  pageSubtitle?: string
}

export default PageLayout
