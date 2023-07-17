import React from 'react';

// mui
import { Box, Button, Stack, Typography, Skeleton } from '@mui/material';

const PostCardSkeleton = () => {
    return (
        <Stack bgcolor={'white'}  borderRadius={'12px'} style={{boxShadow:'0 0 20px -2px rgba(0,0,0,0.2)', borderRadius: '12px'}}>

            <Skeleton animation="wave" variant="rectangular" height={'213.75px'} width={'100%'} sx={{aspectRatio: '16/10',  borderRadius:'12px'}}/>


            <Stack p={2}>
               
                <Skeleton variant="text" width={'80px'} fontSize={'12px'} mb={'4px'} />

                <Stack mt={1.3}>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} fontWeight={700}/>
                    <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} fontWeight={700}/>
                </Stack>

                <Stack mt={1}>
                    <Skeleton variant="text" mt={1} fontSize={'15px'} />
                    <Skeleton variant="text" mt={1} fontSize={'15px'} />
                    <Skeleton variant="text" mt={1} fontSize={'15px'} />
                </Stack>

                <Stack mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Skeleton variant="text" width={'100px'} sx={{ fontSize: '16PX' }} />

                    <Skeleton variant="text" width={'60px'} sx={{ fontSize: '18px' }} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PostCardSkeleton;