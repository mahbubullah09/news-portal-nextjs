"use client"

import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';




//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from '@mui/icons-material';
import Link from 'next/link';



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
        path: "/category"
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

const Footer = () => {
    return (
        <Box className='bg-black  p-10'>
            <Box className='text-center flex justify-center'>
                <Stack direction='row' sx={{
                    "& svg": {
                        color: "white"
                    }
                }}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <XIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </Stack>
            </Box>
            <Box className='w-full text-center' >
            {navItems.map((page) => (
             <Link key={page} href={page.path}>
                <Button className='text-white'>{page.route}</Button>
             </Link>
            ))}

            
          </Box>

          <Typography className='text-center text-white'>
            @2024 The Dragon News. Developed by Mahbub
          </Typography>
        </Box>
    );
};

export default Footer;