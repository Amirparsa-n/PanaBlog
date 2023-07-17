import React from 'react';

// mui
import { Avatar, Box, Container, Grid, Stack, Typography, Skeleton } from '@mui/material';

// components
import PostsRecommendedCardSkeleton from '../shared/PostsRecommendedCardSkeleton';

const PostDetailsSkeleton = () => {

    const numberOfPosts = [1,2,3,4]

    return (
        <div style={{marginTop: '120px'}}>
            <Container maxWidth={'xl'}>
                <Stack display={'flex'} flexDirection={{xs: 'column-reverse', md: 'row'}} justifyContent={'space-between'} alignItems={'center'} columnGap={{xs: 0, md: 6}} rowGap={{xs: 6, md: 0}}>
                    <Box component={'div'} width={{xs: '100%', md: '44%'}}>

                        <Skeleton variant="text" sx={{ fontSize: {xs: '16px', md: '18px'}, fontWeight: 400, maxWidth: '120px', mb: 3 }} />

                        <Skeleton variant="text" sx={{ fontSize: {xs: '24px', md: '26px', lg: '36px'}, fontWeight: 800 }} />
                        <Skeleton variant="text" sx={{ fontSize: {xs: '24px', md: '26px', lg: '36px'}, fontWeight: 800, width: '70%' }} />

                        <Stack mt={7} display={"flex"} flexDirection={'row'} alignItems={'center'} columnGap={2}>
                            <Skeleton variant="circular" width={'40px'} height={'40px'} >
                                <Avatar sx={{width: { md: '40px'}, height: { md: '40px'}}}/>
                            </Skeleton>

                            <Skeleton variant="text" sx={{ fontSize: {xs: '14px', md: '16px'}, width: '50%' }} />

                        </Stack>
                    </Box>

                    <Box component={'div'} width={{xs: '100%', sm: '80%' , md: '52%'}}  >
                        <Skeleton variant="rounded" height={'100%'} sx={{borderRadius: '16px', aspectRatio: '16/10'}}/>
                    </Box>
                </Stack>

                <Box pt={12} display="grid" gridTemplateColumns={{xs: 'repeat(12, 1fr)', md: 'repeat(12, 1fr)'}} columnGap={{xs: 0, md: 4, lg: 10}} rowGap={{xs: 10, md: 0}}>

                    <Box gridColumn={{xs: 'span 12', md: 'span 8'}}>
                        <Box component={'div'} fontSize={'18px'} lineHeight={2} display={'flex'} flexDirection={'column'} gap={1}>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '80%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '90%'}}/>
                            <Skeleton variant='text' sx={{width: '50%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '98%'}}/>
                            <Skeleton variant='text' sx={{width: '80%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '88%'}}/>
                            <Skeleton variant='text' sx={{width: '80%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '92%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '80%'}}/>
                            <Skeleton variant='text' />
                            <Skeleton variant='text' sx={{width: '60%'}}/>
                            <Skeleton variant='text' sx={{width: '90%'}}/>
                        </Box>
                    </Box>

                    <Box gridColumn={{xs: 'span 12', md: 'span 4'}}>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                            <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                            <Typography component={'h2'} fontSize={{xs: '20px', md: '24px'}} fontWeight={700}>تازه ترین ها</Typography>
                        </Stack>

                        <Box mt={4}>
                            <Stack display={'flex'} flexDirection={'column'} rowGap={4}>
                                {numberOfPosts.map(post => (
                                    <PostsRecommendedCardSkeleton key={post} />
                                ))}
                            </Stack>
                        </Box>
                    </Box>

                </Box>

            </Container>
        </div>
    );
};

export default PostDetailsSkeleton;