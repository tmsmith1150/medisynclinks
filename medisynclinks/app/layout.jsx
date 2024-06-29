import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'MediSyncLinks | Medical Alert Jewelry',
    description: 'Beautifully crafted Medical Alert Jewelry',
    keywords: 'jewelry, medical alert, custom jewelry'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
        <div>{children}</div>
        </body>
    </html>
    
  )
}

export default MainLayout
