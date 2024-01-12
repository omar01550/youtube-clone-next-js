'use client';

import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Btns from '@/app/components/bts';
import VideoDescription from '@/app/components/videoDescription';
import Link from 'next/link';


const VideoById = ({params}) => {

  const [frameLoaded,setFrameLoaded] = useState<boolean>(false);
  const videoDetailsUrl =`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${params.id}&key=AIzaSyCPMcjFczCw5nnYWHTF355N26lvzyK0dgc`
  const [channelPhoto,setChannelPhoto] = useState<null|string>(null);
  const [subscribers,setSubscribers] = useState(null)
  
  const [videoData,setVideoData] = useState(null);
   const getVideoDetails = async () => {
      try {
        const res = await fetch(videoDetailsUrl,{
           method:"GET"
        });
        const data = await res.json();
        setVideoData(data);
        console.log(videoData);
        
      } catch (error) {
        console.log("failed to fetch");
        console.log(error.status);

        
        
      }
   }


// getChannelPhoto
useEffect(() => {
   if (videoData) {
    
console.log(videoData.snippet.channelId);
    
    
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${videoData.snippet.channelId}&key=AIzaSyBSdM8OhHxVug8fdLOBRedEVAPZg_twB60`,{
       cache:"no-cache"
    })
   
   .then((res) => {
    return res.json();
   })
   .then((data) => {
    setChannelPhoto(data.items[0].snippet.thumbnails.high.url);
    setSubscribers(data.items[0].statistics.viewCount )
   
       
    
   })
   .catch((error) => {
    setChannelPhoto("https://github.com/shadcn.png")
    console.log('found error');
    console.log(error);
    
    
   })
   }else{
    // setChannelPhoto("https://github.com/shadcn.png")
   }
},[videoData])


  useEffect(() => {
       fetch(videoDetailsUrl)
       .then((result) => {
        
        
        return result.json()

        
       })
       .then((data) => {
        console.log(data);
        setVideoData(data.items[0])
       })
       .catch((err) => {
         
        
        
       });
  },[])

    
  return (
 
        
        

 <div className="w-full min-h-[100vh] mt-3 py-10 dark:bg-black relative">

 {
   !frameLoaded
   &&(
    <div className="loader absolute left-0 top-0 w-[100%] h-[100%] bg-white dark:bg-black z-50 flex justify-center items-center">
          <div className="spinner border-solid border-4 border-b-transparent border-blue-500 rounded-full w-[50px] h-[50px] animate-spin">

          </div>
    </div>
   )
 }

  
<iframe width="560" height="315" 
className='z-10 w-[100%] h-[500px] md:h-[500px]'
     src={"https://www.youtube.com/embed/"+ params.id }
title="YouTube video player"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
onLoad={() => {
 setFrameLoaded(true);

}}



/>

{/* title */}

{
   videoData != null
   ? 
    <>
    <h2 className="text-3 text-black dark:text-white py-3 font-bold">{videoData.snippet.title}</h2>
   {/* section that contains btns and channel */}
   <div className="video-btns flex p-4 justify-between items-center flex-wrap-reverse">
     {/* channel */}
<Link href={"/channel/"+videoData.snippet.channelId} className="channel flex justify-start items-center gap-1 mt-6 md:mt-0 " id={videoData.snippet.channelId}>
        <Avatar>
       <AvatarImage src={channelPhoto} />
       
 </Avatar>
 
 <div className="channel-subscribers flex justify-center items-center flex-col">
     <h3 className="font-bold capitalize text-[20px] text-gray-600 dark:text-white">{videoData.snippet.channelTitle}</h3>
     <h4 className='text-gray-600 dark:text-white font-bold'>{subscribers?subscribers:"loading.."} مشترك</h4>
     
 
 </div>
 
 <button className='subscribe-btn bg-black text-white dark:bg-white dark:text-black rounded-full flex justify-center items-center px-6 py-2 ms-3'>اشتراك</button>
 
 
            
            
</Link>
 
        {/* like btn and dislike and share */}
        <Btns likeCount={videoData.statistics.likeCount}/>  
        
   
   
   
   </div>
   <VideoDescription description={videoData.snippet.localized.description}/>  
   </>
   :'data loading'
}

  


     
 


</div>
    
  )
}

export default VideoById