import { Person, Person2Outlined, ShopOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Badge from '@mui/material/Badge';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Checkbox from '@mui/material/Checkbox';


import React from 'react'

const Header = () => {
  return (
    <header className="p-6 bg-white text-black flex justify-between items-center shadow-md">
      

         <h2 className="logo text-4xl capitalize font-semibold	">Shop</h2>

         <div className="icons flex justify-around items-center">
<IconButton>
     <PersonAddAltIcon/>
</IconButton>


<IconButton>
<Badge badgeContent={4} color='primary'>
             <ShoppingBagOutlined/>
         </Badge>

</IconButton>
         </div>

    </header>
  )
}

export default Header