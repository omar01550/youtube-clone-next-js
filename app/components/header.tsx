'use client'
import React, { useState } from 'react'
import Logo from './logo'
import SearchBar from './searchBar'
import { DarkMode, LightMode, MoodOutlined, Search } from '@mui/icons-material'
import Link from 'next/link'

const Header = ({theme,setTheme}:{theme:string,setTheme:any}) => {
    

  return (
    <header className='p-4 shadow-lg flex justify-between items-center'>
        <Link href="/">
            <Logo/>
        </Link>
        <SearchBar/>
        <div className='flex items-center'>
            <Search className='ml-5 block md:hidden'/>
        {

             theme == 'dark'
             ?<LightMode className='cursor-pointer ' onClick={() => { 
                setTheme('light')
             }}/>
             :<DarkMode className='cursor-pointer' onClick={() => { 
                setTheme('dark')
             }}/>

             
        }
        </div>
        
    </header>
  )
}

export default Header