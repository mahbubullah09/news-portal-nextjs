import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async({ searchParams}) => {

    console.log(searchParams.category);
    const {data} = await getCategoryNews(searchParams.category)

    console.log(data);
    return (
        <div>
            <h1 className='my-6'><span className=' bg-red-500 text-white px-2 py-1 text-xl'>{searchParams.category.toUpperCase()} </span></h1>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {
                    data.map((news) =>(
                        <Grid key={news.id} item xs={6}>
                      <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                      <Card >
                            <CardActionArea>
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px"
                                    } 
                                }}>
                                    <Image src={news.thumbnail_url} alt='news' width={800} height={60} />
                                </CardMedia>
                                <CardContent>
                                    <p>
                                        <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {news.category} </span>
                                    </p>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {news.title.length>30 ? news.title.slice(0,30)+"..." : news.title}
                                    </Typography>
                                    <Typography gutterBottom >
                                        By {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {news.details.length>200 ? news.details.slice(0,200)+"..." : news.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                      </Link>
                    </Grid>
                    ))
                  }
                 

                </Grid>
            </Box>
        </div>
    );
};

export default DynamicNewsPage;