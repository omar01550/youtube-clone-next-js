import React from 'react'

const VideoById = ({params}) => {
    
  return (
    <div>
        
        <h1 className="text-center">
             {params.id}
        </h1>

        <div className="w-full min-h-full flex justify-center items-center py-10">
        <iframe width="560" height="315" 
        src={"https://www.youtube.com/embed/"+ params.id }

  title="YouTube video player"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

/>


        </div>
    </div>
  )
}

export default VideoById