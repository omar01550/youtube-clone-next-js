import { NextResponse } from "next/server"






const products =  [
    {
       "title":"shirt 1",
       "description":"shirt one description",
       "color":"red",
       "brand":"adiddas",
       "type":"shirt",
       "views":["omar","ali","sameh"],
       "gender":"male",
       "images":["image-1.png","image-2.png","image-3.png"],
       "size":"1x"
   },
   {
       "title":"shirt 2",
       "description":"shirt two description",
       "color":"red",
       "brand":"adiddas",
       "type":"shirt",
       "views":["omar","ali","sameh"],
       "gender":"male",
       "images":["image-1.png","image-2.png","image-3.png"],
       "size":"1x"
   },
   {
       "title":"shirt 3",
       "description":"shirt three description",
       "color":"red",
       "brand":"adiddas",
       "type":"shirt",
       "views":["omar","ali","sameh"],
       "gender":"male",
       "images":["image-1.png","image-2.png","image-3.png"],
       "size":"1x"
   },
   {
       "title":"shirt 4",
       "description":"shirt four description",
       "color":"red",
       "brand":"adiddas",
       "type":"shirt",
       "views":["omar","ali","sameh"],
       "gender":"male",
       "images":["image-1.png","image-2.png","image-3.png"],
       "size":"1x"
   }

]


export const GET = async (request) => {
    return NextResponse.json({
       products : products  
    })
}