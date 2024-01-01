'use client';
import React, { useEffect, useState } from 'react'
import VideoCard from "../../components/videoCard"





const SearchClient = ({videos}) => {
    

  return (
         <div className="flex justify-between items-center py-6 flex-wrap">
            {
                 videos.length !=0
                 &&videos.map((video) => {
                    return (
                         <VideoCard
                         image={video.snippet.thumbnails.medium.url}
                         title={video.snippet.title}
                         id={video.id.videoId}
                         channelTitle={video.snippet.channelTitle}
                         channelId={video.snippet.channelId}
                         puplishedAt={video.snippet.puplishedAt}
                         
                         />
                    )
                 })
                             }


               
         </div>

  )
}

export default SearchClient;