

import SearchClient from "./client"
import Counter from "./client"


export const metadata={
     title:"search page",
     description:'serach page youtube'
}

const SearchPage = async ({params}) => {
    const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=EG&maxResults=12&key=${"AIzaSyAAl-AqNyaZr0NiNnjsz73_o4sM3Eyk77I"}&q=${params.query}`
    metadata.title = params.query

    try {
        const res= await fetch(url);
        const result = await res.json();
        const videos = result.items;
         
        videos.map((video) => {
            metadata.description +=" "+video.snippet.title;
        })

 
        
        return(
 
<main className="search-page">
      <h1 className="text-center text-3xl mt-4 font-bold">result of {params.query}</h1>
      <SearchClient videos={videos}/>
</main>

        )
    } catch (error) {
        console.log(error);
        
        return <div>erroor</div>
    }
    

    
    
  
}

export default SearchPage


                    // <VideoCard
                    // image="{video.snippet.thumbnails.medium.url}"
                    // title="{video.snippet.title}"
                    // id="{video.id}"
                    // channelTitle="{video.snippet.channelTitle}"
                    // channelId='{video.snippet.channelId}'
                    // puplishedAt="{video.snippet.puplishedAt}"
                    
                    // />