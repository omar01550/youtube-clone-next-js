'use client';
import React, { useState } from 'react'
import CategoryBar from './components/categoryBar'
import VideoCard from './components/videoCard'
import CardLoader from './components/cardLoader';

const HomePage = () => {
    const [videos,setVideos] = useState([]);

    setTimeout(() => {
       setVideos([1,2,3,4,5,6,7,8,9,,0]) 
    }, 4000);
  return (
    <main className="home-page">
         <CategoryBar/>

         <div className="flex justify-between items-center py-6 flex-wrap">
            {
                 videos.length !=0
                 ?videos.map((ele) => {
                    return (
                         <VideoCard/>
                    )
                 })
                 :[1,2,3,4,5,6,7,8,9,9,7,7,7,7]
                 .map(() => {
                    return (
                        <CardLoader/>
                    )
                 })
            }
               
         </div>
    </main>
  )
}

export default HomePage