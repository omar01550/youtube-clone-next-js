'use client'
import React, { useState } from 'react'
import Header from './components/header'
import './globals.css'
import Container from './components/container'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  const [theme ,setTheme]= useState('light')
  
  return (
    <html dir='rtl'>
        <body className={theme}>
        
            <Container>
            <Header
            setTheme={setTheme}
            theme={theme}
            />
                {children}
            </Container>

        </body>
    </html>
  )
}

export default RootLayout