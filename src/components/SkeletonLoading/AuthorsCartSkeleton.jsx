import React from 'react';

// mui
import { Avatar, Box, Grid, Stack, Typography, Skeleton } from '@mui/material';

const AuthorsCartSkeleton = () => {
    return (
        <Box component={'div'} className='AuthorsCart' bgcolor={'white'} borderRadius={'16px'} boxShadow={'0 0 10px 0px rgba(0,0,0,0.1)'}>
            <Stack display={'flex'} flexDirection={'column'} alignItems={'center'} p={3}>
                <Skeleton variant="circular">
                <Avatar
                sx={{ width: '100px', height: '100px' }}
                className='AuthorsAvatar'
                />
                </Skeleton>

                <Skeleton variant="text" sx={{ fontSize: {xs: '20px' , sm: '22px'}, width: '80%', textAlign: 'center', mt: 3 }} />

                <Skeleton variant="text" sx={{ fontSize: {xs: '12px' , sm: '14px'}, width: '60%', textAlign: 'center' }} />
            </Stack>
        </Box>
    );
};

export default AuthorsCartSkeleton;