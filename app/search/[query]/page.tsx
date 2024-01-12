

import SearchClient from "./client"
import Counter from "./client"


export const metadata={
     title:"search page",
     description:'serach page youtube'
}

const SearchPage = async ({params}) => {
    const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=EG&maxResults=12&key=${"AIzaSyAAl-AqNyaZr0NiNnjsz73_o4sM3Eyk77I"}&q=${params.query}`
    metadata.title = params.query

    try {
        const res= await fetch(url,{
            "cache":"no-cache"
        });
        const result = await res.json();
        const videos = result.items;
        
         
        videos.map((video) => {
            metadata.description +=" "+video.snippet.title;
        })

 
        
        return(
 
<main className="search-page">
      <h1 className="text-center text-3xl mt-4 font-bold">نتائج البحث عن {params.query}</h1>
      <SearchClient videos={videos}/>
</main>

        )
    } catch (error) {
        console.log(error);
        
        return <div>erroor</div>
    }
    

    
    
  
}

export default SearchPage


                    