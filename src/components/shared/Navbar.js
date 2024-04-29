
"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';


//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';
import Header from './Header';



const navItems = [
    {
        route: 'Home',
        path: "/"
    },
    {
        route: 'pages',
        path: "/pages"
    },
    {
        route: 'Category',
        path: "/categories/news?category=all-news"
    },
    {
        route: 'News',
        path: "/news"
    },
    {
        route: 'about',
        path: "/about"
    },
    {
        route: 'contact',
        path: "/contact"
    },


];


function Navbar() {


  return (
   <>
   <Header/>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Image  className='w-28' src={logo} alt='logo' />
          
          <Box className='w-full text-center' >
            {navItems.map((page) => (
             <Link key={page} href={page.path}>
                <Button className='text-white'>{page.route}</Button>
             </Link>
            ))}

            
          </Box>
          <Box>
           <Stack direction='row' sx={{
            "& svg":{
                color:"white"
            }
           }}>
           <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <XIcon/>
            </IconButton>
            <IconButton>
                <LinkedInIcon/>
            </IconButton>
            <IconButton>
                <Instagram/>
            </IconButton>
           </Stack>
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar></>
  );
}
export default Navbar;
