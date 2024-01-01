import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'


const CardLoader = () => {
  return (
    
 <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full md:w-80 mt-5" key={Math.floor(Math.random()*1002)}>
    <div className="relative overflow-hidden rounded-lg">
        <Skeleton
          className="w-full h-[160px] rounded-lg"
        />
      
      
      
      
      
      <Skeleton className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-xs text-white rounded h-[20px] w-[50px]"/>
        
      
    </div>
    <div className="mt-4">
      <Skeleton className="text-lg font-semibold text-gray-900 dark:text-gray-300 h-[50px]"/>
      
      <div
       className="channel flex justify-start items-center w-[fit-content]">
         <Skeleton
       
          className='rounded-full w-[30px] h-[30px] mt-2'

         />
         <Skeleton className='px-10 text-gray-700 dark:text-gray-300 py-3 ms-2'/>
      </div>

      
    </div>
  </div>
  

    
  )
}

export default CardLoader