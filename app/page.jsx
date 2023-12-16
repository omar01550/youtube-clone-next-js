'use client';

import React from 'react'
import SortBy from './components/sort';
import MediaCard from './components/card';
import NestedList from './components/menu';

const HomePage = () => {
  return (
    <main className="home-page flex justify-start p-3">
      <aside className="filter w-[20%] hidden md:block h-[88vh] overflow-scroll">
<h1 className="capitalize text-4xl font-semibold	 ">
   <NestedList/>
   <NestedList/>
   <NestedList/>
   <NestedList/>
   <NestedList/>
   <NestedList/>

</h1>

{/* line */}
<div className="line w-[100%] h-[2px] bg-gray-400 my-6"></div>
      </aside>


      {/* products section */}
      <section className="products pl-6 xs:w-[100%] md:w-[80%]">
             <div className="section-header flex justify-between items-center py-5">
                  <div className='flex items-center text-2xl uppercase text-gray-600'>
                  <small>2222</small>
                  <h3 className='ml-2'>item</h3>
                  </div>
                       <SortBy/>
                  
                  
             </div>

             <div className="cards flex justify-between items-center flex-wrap py-5">
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
             </div>
      </section>
         
    </main>
  )
}

export default HomePage