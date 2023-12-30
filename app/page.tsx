'use client';
import React, { useEffect, useState } from 'react'
import CategoryBar from './components/categoryBar'
import VideoCard from './components/videoCard'
import CardLoader from './components/cardLoader';

const HomePage = () => {
    const url ='https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyBSdM8OhHxVug8fdLOBRedEVAPZg_twB60&maxResults=15&q=tamer hosny'
    const [videos,setVideos] = useState([]);
    const [loading,setLoading] = useState(false);


    useEffect(() => {
        getVideos(url)
    },[])

    async function getVideos(url:string) {
        setLoading(true)
        fetch(url)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            setVideos(data.items)
            
        })
        .catch((err) => {
            
        });
        
    }

  return (
    <main className="home-page">
         <CategoryBar/>

         <div className="flex justify-between items-center py-6 flex-wrap">
            {
                 videos.length !=0
                 ?videos.map((video) => {
                    return (
                         <VideoCard
                         image={video.snippet.thumbnails.medium.url}
                         title={video.snippet.title}
                         id={video.id.videoId}
                         
                         />
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

export default React.memo(HomePage);