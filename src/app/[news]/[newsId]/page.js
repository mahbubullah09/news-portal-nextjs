import { getSingleNews } from '@/utils/getSingleNews';
import { Box, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetails = async ({ params }) => {

    const { data } = await getSingleNews(params.newsId)
    console.log(data);

    return (
        <Box className=' max-w-6xl mx-auto mt-6'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Image src={data.thumbnail_url} width={800} height={100} alt='thumbnail' />

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Image src={data.image_url} width={800} height={100} alt='thumbnail' />

                        </Grid>
                        <Grid item xs={6}>
                            <Image src={data?.image_url} width={800} height={100} alt='thumbnail' />

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={6}>
                <CardContent>
                                    <p>
                                        <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data.category} </span>
                                    </p>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography gutterBottom >
                                        By {data.author.name} - {data.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {data.details}
                                    </Typography>
                                </CardContent>

                </Grid>

            </Grid>

        </Box>
    );
};

export default NewsDetails;