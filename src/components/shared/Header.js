"use client"
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/logo.png'
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {

    const currentDate = getCurrentDate()
    return (
        <Box >
            <Container className='w-full my-4' >
                <Image src={headerImage} width={500} height={100} alt='Header Image' className='mx-auto'/>
                <Typography className='text-center  text-sm text-gray-400 mt-2' >
            Journalishm without fear and fevour
          </Typography>
          <Typography className='text-center'>{currentDate}</Typography>
            </Container>
            
        </Box>
    );
};

export default Header;