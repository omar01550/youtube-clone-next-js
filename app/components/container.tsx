import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='px-3 md:px-5 lg:px-6 bg-white text-black dark:bg-black dark:text-white'>
        {children}
    </main>
  )
}

export default Container