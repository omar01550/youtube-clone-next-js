import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const VideoDescription = ({description}) => {
  return (
    <div>
<Accordion type="single" collapsible className='dark:bg-black dark:text-white'> 
  <AccordionItem value="item-1" className='dark:bg-black dark:text-white'>
    <AccordionTrigger className='mt-4 dark:text-white'>الوصف</AccordionTrigger>
    <AccordionContent className='dark:text-white dark:bg-black'>
         {description}
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default VideoDescription