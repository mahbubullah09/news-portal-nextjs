import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import news1 from '@/assets/topnews1.png'
import news2 from '@/assets/topnews2.png'
import news3 from '@/assets/3.png'
import Link from 'next/link';
import { getCategoryNews } from '@/utils/getCategoryNews';



const SideBar = async () => {
    const { data } = await getCategoryNews('all-news')
    return (
        <Box className='my-5'>
       <Link href={`${data[6].category}/${data[6]._id}`}>
              <Card >
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[6].thumbnail_url} alt='news' width={800} height={500} />
                        </CardMedia>
                        <CardContent>
                            <p>
                                <span className=' bg-red-500 rounded  py-1 px-2 text-white'> {data[0].category}</span>
                            </p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[6].title}
                            </Typography>
                            <Typography gutterBottom >
                            By {data[6].author.name} - {data[6].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[6].details.length>300? data[6].details.slice(0,300)+"..." : data[0].details}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
              </Link>
    </Box>
    );
};

export default SideBar;