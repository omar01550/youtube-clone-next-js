'use client';

import React, { useEffect, useState } from 'react'
import SortBy from './components/sort';
import MediaCard from './components/card';
import NestedList from './components/menu';
import CardLoading from './components/cardLoading';
import { Box,Skeleton } from '@mui/material';


const HomePage = () => {

const [products,setProducts] = useState([]);

const getProducts = async () => { 
    try {
      const res = await fetch('https://ecommerce-next-js-omar.vercel.app/api/products')
      const data = await res.json()
     setProducts(data.products);
    } catch (error) {console.log(error);
      
    }
 }

useEffect(() => { 
  getProducts();

},[])


const filterItems = [
  {
    filterBy:"brand",
    items:[
      
    ],

  },
  {
    filterBy:"gender",
    items:[
      
    ],
  },
  {
    filterBy:"views",
    items:[
      
    ],
  },
  {
    filterBy:"type",
    items:[
      
    ],
  },
  {
    filterBy:"size",
    items:[
      
    ],
  },

]




  const [filterData ,setFilterData]= useState([
    {
      filterBy:"brand",
      items:[
        "adiidas",
        "puma",
        'nike',
        "php"
      ],

    },
    {
      filterBy:"gender",
      items:[
        "male",
        "female"
      ],
    },
    {
      filterBy:"views",
      items:[
        "highst",
        "lowest"
      ],
    },
    {
      filterBy:"type",
      items:[
        "shirt",
        "watch",
        "pants",
        "higab"
      ],
    },
    {
      filterBy:"size",
      items:[
        "1x",
        "2x",
        "3x"
      ],
    },
    
  ]);

  // end of filter data

  return (
    <main className="home-page flex justify-start p-3">
      <aside className="filter w-[20%] hidden md:block h-[88vh] overflow-scroll">
<h1 className="capitalize text-4xl font-semibold	 ">
   {
     filterData.map((ele) => {
      return (
        <NestedList item={ele} filterData={filterData} setFilterData={setFilterData}/>
      )
     })
   }
   

</h1>

{/* line */}
<div className="line w-[100%] h-[2px] bg-gray-400 my-6"></div>
      </aside>


      {/* products section */}
      <section className="products xs:pl-0 md:pl-6 xs:w-[100%] md:w-[80%]">
             <div className="section-header flex justify-between items-center py-5">
                  <div className='flex items-center text-2xl uppercase text-gray-600'>
                  {
                     products.length !=0
                     ?
                     (
                      <small>{products.length}</small>
                     )
                     :
                     <Box className="flex items-center">
                      <Skeleton variant="rounded" width={60} height={25} className='ml-3' />
                      <div className='ml-3'>:</div>
                      <Skeleton variant="rounded" width={60} height={25} className='ml-3'/>
                     </Box>

                  }
                  <h3 className='ml-2'>item</h3>
                  </div>
                       {/* <SortBy/> */}
                       
                  
                  
             </div>

             <div className="cards flex justify-around items-center flex-wrap py-5">
                
                {
                   products.length !=0 ?(
                     products.map((item) => { 
                      return (
                        <MediaCard item={item}/>
                      )
                     })
                   )
                   :
                   <div className='w-[100%] flex justify-around items-center flex-wrap'>
                    {
                      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item) => {
                        return <CardLoading/>
                       })
                    }
                   </div>
                }
             </div>
      </section>
         
    </main>
  )
}

export default HomePage