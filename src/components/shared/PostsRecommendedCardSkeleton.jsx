import React from 'react';

// mui
import { Avatar, Box, Container, Grid, Stack, Typography, Button, Skeleton } from '@mui/material';

// icons
import nextIcon from '../../assets/icons/next.svg';

const PostsRecommendedCardSkeleton = () => {
    return (
        <Box component={'div'} boxShadow={"0 0 15px 1px rgba(0, 0, 0, 0.15)"} borderRadius={'12px'}>
            <Stack display={'flex'} flexDirection={'row'} p={'12px'} columnGap={2}>
                <Skeleton variant="rounded" sx={{aspectRatio: '4/3', width: {xs: '187px', sm: '284px', md: '157px', lg: '213px'}, borderRadius:'12px' }} height={'100%'} />

                <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={'100%'}>

                    <Box component={'div'}>
                        <Skeleton variant="text" sx={{ fontSize: {xs: '',sm: '16px', md: '12px', lg: '14px'}, fontWeight: 600}} />
                        <Skeleton variant="text" sx={{ fontSize: {xs: '',sm: '16px', md: '12px', lg: '14px'}, fontWeight: 600}} />
                    </Box>

                    <Box component={'div'} alignSelf={'end'} pl={1}>
                        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} columnGap={1}>
                         <Skeleton variant="text" sx={{ fontSize: {xs: '14px', md: '16px'}, width: '60px' }} />
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default PostsRecommendedCardSkeleton;