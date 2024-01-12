'use client';
import { RecordVoiceOverOutlined, Search, VoiceChatOutlined } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { VoicemailIcon } from 'lucide-react'
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const SearchBar = () => {
  const [value,setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="search-bar flex items-center justify-center">
         <div className="field bg-white rounded-full hidden md:flex justify-start items-center ps-2 border-solid border-gray-300 border-2">
             <Search className="text-black bg-white "/>
             <input type="text" className="w-[300px] border-none text-2xl outline-none ps-3 text-black" placeholder='بحث ....' onChange={handleChange}/>
             {
               value != ''?
               <Link href={'/search/'+value}>
               <Search className='bg-white shadow-md rounded-e-full text-2xl w-[50px] text-gray-700 '/>
           </Link>
           :
           <div>
           <Search className='bg-white shadow-md rounded-e-full text-2xl w-[50px] text-gray-700 '/>
       </div> 
             }
         </div>
         <div className="search-voice w-[40px] h-[40px] hidden md:flex justify-center items-center bg-gray-100 text-black rounded-full mx-3 cursor-pointer " >
            <KeyboardVoiceIcon/>
         </div>
    </div>
  )
}

export default SearchBar