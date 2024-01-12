import React, { useEffect } from 'react'

const serverComponent = () => {
    console.log('i am a server component insde component');
    
    useEffect(() => {
        console.log('changed');
        
    })
    
  return (
    <div>serverComponent</div>
  )
}

export default serverComponent