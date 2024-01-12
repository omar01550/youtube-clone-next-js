'use client';
import React, { useEffect, useState } from 'react'
import CategoryBar from './components/categoryBar'
import VideoCard from './components/videoCard'
import CardLoader from './components/cardLoader';
import { Loader2 } from "lucide-react"



const HomePage = () => {
    const url =`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=EG&maxResults=12&key=${"AIzaSyAAl-AqNyaZr0NiNnjsz73_o4sM3Eyk77I"}`
    const [videos,setVideos] = useState([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [nextPageToken ,setNextPageToken] = useState<string>('');
    const [loadingMoreIndecator,setLoadMoreIndecator]= useState<boolean>(false)
    

useEffect(() => {
    console.log(nextPageToken);
    
},[nextPageToken])
const LoadMoreFunc= async (url:string) => {
    setLoadMoreIndecator(true)

    
    try {
        const res = await fetch(url);
        const result = await res.json();
        const newVideos = result.items
        
        setNextPageToken(result.nextPageToken)
        setVideos([...videos,...newVideos]);
        
        setLoadMoreIndecator(false);
        
    } catch (error) {
        console.log(error);
        setLoadMoreIndecator(false)
        
    }
}


    useEffect(() => {
        getVideos(url)
    },[])
// main videos
    async function getVideos(url:string) {
        setLoading(true)
        fetch(url)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            setNextPageToken(data.nextPageToken)
            setVideos(data.items)
            
        })
        .catch((err) => {
            
    console.log(err);
            
        });
        
    }


  return (
    <main className="home-page">
    

         <div className="flex justify-between items-center py-6 flex-wrap">
            {
                 videos.length !=0
                 ?videos.map((video) => {
                    return (
                         <VideoCard
                         image={video.snippet.thumbnails.medium.url}
                         title={video.snippet.title}
                         id={video.id}
                         channelTitle={video.snippet.channelTitle}
                         channelId={video.snippet.channelId}
                         puplishedAt={video.snippet.puplishedAt}
                         
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


            <div className="flex justify-center items-center w-full py-3">
                 {
                     videos.length !=0&&(
                        <button className='text-white p-2 bg-black rounded-lg dark:bg-white dark:text-black font-bold mt-3' 
                            onClick={() => {
                                LoadMoreFunc(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=EG&maxResults=12&key=${"AIzaSyAAl-AqNyaZr0NiNnjsz73_o4sM3Eyk77I"}&pageToken=${nextPageToken}`)
                            }}
                            >
                            
                                {
                                loadingMoreIndecator?<div className="loader w-[40px] h-[40px] border-solid border-4 border-blue-500 rounded-full border-b-transparent animate-spin"></div>:'مشاهدة المزيد'}

                 </button>
                     )
                 }
                 

                 
            </div>
               
         </div>
    </main>
  )
}

export default React.memo(HomePage);