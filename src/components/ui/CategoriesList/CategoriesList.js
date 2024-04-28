import { getAllCategories } from '@/utils/getallcategories';
import { Box, Button, Divider, Stack } from '@mui/material';
import Link from 'next/link';


const CategoriesList = async() => {

    const allCategories = await getAllCategories()
 

    return (
        <Box className=' bg-slate-300 px-4 py-2'>

            <h1 className='text-center'>Categories</h1>
            <Divider/>
            <Stack rowGap={1}>

                {
                    allCategories.data.map((data) =>(
                        <Button variant='outlined' key={data._idx}> 
                       <Link href={`news?category=${data.title.toLowerCase()}`}> {data.title}</Link>
                        </Button>
                    ))
                }


            </Stack>

            
        </Box>
    );
};

export default CategoriesList;