'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
function timeSincePublished(publishedDate) {
  const currentDate = new Date();
  const publishedDateTime = new Date(publishedDate);
  const timeDifference = currentDate.getTime() - publishedDateTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
}



const VideoCard = ({image,title,id,channelTitle,channelId,puplishedAt}:{image:string,title:string,id:string,channelTitle:string,channelId:string,puplishedAt:string}) => {
 const [channelImage,setChannelImage] = useState<string>('')

useEffect(() => {
fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${"AIzaSyBSdM8OhHxVug8fdLOBRedEVAPZg_twB60"}`)
.then((res) => {
  return res.json()
})
.then((res) => {
setChannelImage(res.items[0].snippet.thumbnails.medium.url);

})
.catch((err) => {
  console.log(err);
  
});
    
},[])


  return (
    <Link href={`/video/${id}`} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 pb-4 w-full md:w-80 mt-5" key={id}>
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt="Video thumbnail"
        className="w-full min-h-[200px] h-auto rounded-lg"
      />
      {/* <span className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-xs text-white rounded">
        10:28
      </span> */}
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
        {title}
      </h3>
      <Link href={'/channel/'+channelId}
       className="channel flex justify-start items-center w-[fit-content] mt-3">
         <img
          src={channelImage}
          alt="not found"
          className='rounded-full w-[30px] h-[30px]'

         />
         <p className='px-2 text-gray-700 dark:text-gray-300'>{channelTitle}</p>
      </Link>
{/* 
      <div className="flex items-center mt-2">
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
          1.5M views
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{timeSincePublished(puplishedAt)}</span>
      </div> */}
    </div>
  </Link>

  )
}

export default VideoCard



