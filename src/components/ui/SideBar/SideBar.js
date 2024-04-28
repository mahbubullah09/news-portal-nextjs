import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import news1 from '@/assets/topnews1.png'
import news2 from '@/assets/topnews2.png'
import news3 from '@/assets/3.png'



const SideBar = () => {
    return (
        <Box className='my-5'>
        <Card >
            <CardActionArea>
                <CardMedia>
                    <Image src={news1} alt='news' width={800} height={500} />
                </CardMedia>
                <CardContent>
                    <p>
                        <span className=' bg-red-500 rounded  py-1 px-2 text-white'> Technology</span>
                    </p>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography gutterBottom >
                        By Mahbubullah - 28-04-2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
    );
};

export default SideBar;