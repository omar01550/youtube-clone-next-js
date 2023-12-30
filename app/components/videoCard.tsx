import Link from 'next/link'
import React from 'react'

const VideoCard = ({image,title,id}:{image:string,title:string,id:string}) => {
  return (
    <Link href={`video/${id}`} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 w-full md:w-80 mt-5" key={id}>
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt="Video thumbnail"
        className="w-full min-h-[200px] h-auto rounded-lg"
      />
      <span className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-xs text-white rounded">
        10:28
      </span>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
        {title}
      </h3>
      <Link href="/channel/80989080"
       className="channel flex justify-start items-center w-[fit-content]">
         <img
          src="https://yt3.ggpht.com/ytc/AIf8zZQGwLoBO86w8kYowqHpGnRx2-N5ikxLBsYu_-L175o=s68-c-k-c0x00ffffff-no-rj"
          alt="not found"
          className='rounded-full w-[30px] h-[30px]'

         />
         <p className='px-2 text-gray-700 dark:text-gray-300'>omar vlogs</p>
      </Link>

      <div className="flex items-center mt-2">
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
          1.5M views
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">2 days ago</span>
      </div>
    </div>
  </Link>

  )
}

export default VideoCard