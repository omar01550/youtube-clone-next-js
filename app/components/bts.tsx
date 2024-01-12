import React from 'react'
import { LinkedCamera, ShareOutlined, Star, ThumbDownOffAlt, ThumbUpOffAlt } from '@mui/icons-material';

const Btns = ({likeCount}) => {
  return (
    <div className="btns w-full md:w-[50%] flex justify-between md:justify-end items-center">
  <button className='flex justify-between items-center'>
      <div className="like">
          <ThumbUpOffAlt/>
          <span className='px-2'> {likeCount}</span>
      </div>

      <div className="dislike">
           <ThumbDownOffAlt/>
           
      </div>

  </button>
  <button className='subscribe-btn bg-black text-white dark:bg-white dark:text-black rounded-full flex justify-center items-center px-6 py-2 ms-3 flex-row-reverse'>
      <ShareOutlined/>
      <span className='px-2'>مشاركه</span>
  </button>
  
  
  </div>
  )
}

export default Btns