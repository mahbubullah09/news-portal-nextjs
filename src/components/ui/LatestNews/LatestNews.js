import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

import news1 from '@/assets/topnews1.png'
import news2 from '@/assets/topnews2.png'
import news3 from '@/assets/3.png'
import Image from 'next/image';
import { getCategoryNews } from '@/utils/getCategoryNews';
import Link from 'next/link';

const LatestNews = async () => {

    const { data } = await getCategoryNews('all-news')
    
    return (
        <>
            <Box className='my-5'>
                <Link href={`${data[0].category}/${data[0]._id}`}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={data[0].thumbnail_url} alt='news' width={800} height={500} />
                            </CardMedia>
                            <CardContent>
                                <p>
                                    <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                                </p>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data[0].title}
                                </Typography>
                                <Typography gutterBottom >
                                    By {data[0].author.name} - {data[0].author.published_date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {data[0].details.length > 300 ? data[0].details.slice(0, 300) + "..." : data[0].details}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Box>

            <Box sx={{ width: '100%' ,
            "& img":{
                width: "100%",
                height: "200px"

            } }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Link href={`${data[1].category}/${data[1]._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia>
                                        <Image src={data[1].thumbnail_url} alt='news' width={800} height={500} />
                                    </CardMedia>
                                    <CardContent>
                                        <p>
                                            <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data[1].title}
                                        </Typography>
                                        <Typography gutterBottom >
                                            By {data[1].author.name} - {data[1].author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data[1].details.length > 200 ? data[0].details.slice(0, 300) + "..." : data[0].details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href={`${data[3].category}/${data[3]._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia>
                                        <Image src={data[3].thumbnail_url} alt='news' width={800} height={500} />
                                    </CardMedia>
                                    <CardContent>
                                        <p>
                                            <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data[3].title}
                                        </Typography>
                                        <Typography gutterBottom >
                                            By {data[3].author.name} - {data[3].author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data[3].details.length > 200 ? data[0].details.slice(0, 300) + "..." : data[0].details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href={`${data[4].category}/${data[4]._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia>
                                        <Image src={data[4].thumbnail_url} alt='news' width={800} height={500} />
                                    </CardMedia>
                                    <CardContent>
                                        <p>
                                            <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data[4].title}
                                        </Typography>
                                        <Typography gutterBottom >
                                            By {data[4].author.name} - {data[4].author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data[4].details.length > 200 ? data[4].details.slice(0, 300) + "..." : data[0].details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href={`${data[5].category}/${data[5]._id}`}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia>
                                        <Image src={data[5].thumbnail_url} alt='news' width={800} height={500} />
                                    </CardMedia>
                                    <CardContent>
                                        <p>
                                            <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                                        </p>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data[5].title}
                                        </Typography>
                                        <Typography gutterBottom >
                                            By {data[5].author.name} - {data[5].author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data[5].details.length > 200 ? data[0].details.slice(0, 300) + "..." : data[0].details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>

                </Grid>
            </Box>




        </>
    );
};

export default LatestNews;