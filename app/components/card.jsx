'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, ButtonBase, Paper } from '@mui/material';
import { MoreVert, Settings } from '@mui/icons-material';
import Link from 'next/link';
import Menu from '@mui/material';
import MenuItem from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function RecipeReviewCard({item}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <Card sx={{ maxWidth: 345 ,margin:{
       xs:"0px",
       md:"20px"
    },
    marginTop:"20px",
    width:"300px"}}>
      <Box className='flex justify-end'>
      <ButtonBase
      className='pb-3'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
      >
<MoreVert color='default'/>
      </ButtonBase>
{/* 
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

      

      </Box>
      <Link href="/productid">
      <CardMedia
       
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
        sx={{
           width:"100%",
           height:"200px",
           cursor:"pointer"
        }}
      
      />
      </Link>
      <CardContent>
        <div className="views flex items-center">
         <RemoveRedEyeIcon/>
         <h3 className="text-1xl color-gray-600 ml-2">1000</h3>
        </div>
        <h1 className="text-3xl font-bold card-title my-3">{item.title}</h1>
       <h3 className="brand text-1xl capitalize">
        by : {item.brand}
       </h3>
       <h3 className="brand text-1xl capitalize">
        size : 3xl
       </h3>

        <Typography variant="body2" color="text.secondary" className='mt-2 1-[100] w-[100] h-[30px] truncate	' >
{item.description}
        </Typography>
      </CardContent>
        </Card>
  );
} 

























