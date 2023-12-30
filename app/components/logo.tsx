import { YouTube } from '@mui/icons-material'
import React from 'react'

const Logo = () => {
  return (
    <div className="logo flex items-center justify-center">
         
         <h2 className="text-2xl md:text-3xl text-black dark:text-white capitalize font-bold">
             youtube
         </h2>
         <YouTube className='text-[#ff0000] text-3xl md:text-5xl'/>
            
    </div>
  )
}

export default Logo