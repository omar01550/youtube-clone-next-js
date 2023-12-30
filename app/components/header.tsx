'use client'
import React, { useState } from 'react'
import Logo from './logo'
import SearchBar from './searchBar'
import { DarkMode, LightMode, MoodOutlined, Search } from '@mui/icons-material'

const Header = ({theme,setTheme}:{theme:string,setTheme:any}) => {
    

  return (
    <header className='p-4 shadow-lg flex justify-between items-center'>
        <Logo/>
        <SearchBar/>
        <div className='flex items-center'>
            <Search className='ml-5'/>
        {

             theme == 'dark'
             ?<LightMode className='cursour-pointer ' onClick={() => { 
                setTheme('light')
             }}/>
             :<DarkMode className='cursour-pointer ' onClick={() => { 
                setTheme('dark')
             }}/>

             
        }
        </div>
        
    </header>
  )
}

export default Header