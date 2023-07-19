import React from 'react';

// mui
import { Avatar, Box, Container, Stack, Typography, Skeleton } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// component 
import PostCardSkeleton from '../shared/PostCardSkeleton';

const AuthorDetailsSkeleton = () => {

    const numberOfPosts = [1, 2, 3, 4]

    return (
        <Box>
            <Stack bgcolor={'#F7F9FD'} py={3} mt={{xs: '-24px',sm: '-15px', md:'-6px'}}>
                <Container maxWidth={'xl'}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
                        <Skeleton variant="circular" animation= 'wave'>
                            <Avatar sx={{width: {xs: '100px',sm: '150px', md: '200px'}, height: {xs: '100px',sm: '150px', md: '200px'}}} />
                        </Skeleton>

                        <Box component={'div'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={{xs: 1.5, md: 2}} width={{xs: '60%', md: '30%'}}>
                            <Typography component={'h1'} color={'secondary'} fontSize={{xs: '22px', md: '28px'}} fontWeight={600} width={"70%"}>
                                <Skeleton />
                            </Typography>
                            <Typography component={'h4'} color={'GrayText'} fontSize={{xs: '16px',sm: '18px', md: '20px'}} width={'30%'}>
                                <Skeleton />
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Stack>

            <Container maxWidth={'xl'}>
                <Box mt={6}>
                    <Box component={'div'} fontSize={{xs: '14px', sm: '16px', md: '18px'}} display={'flex'} flexDirection={'column'} gap={1} >
                        <Skeleton />
                        <Skeleton width={'60%'}/>
                        <Skeleton width={'90%'}/>
                        <Skeleton />
                        <Skeleton width={'90%'}/>
                        <Skeleton width={'80%'}/>
                        <Skeleton />
                        <Skeleton width={'100%'}/>
                        <Skeleton width={'98%'}/>
                        <Skeleton width={'50%'}/>
                        <Skeleton width={'40%'}/>
                        <Skeleton width={'100%'}/>
                        <Skeleton width={'70%'}/>
                        <Skeleton width={'98%'}/>
                        <Skeleton width={'100%'}/>
                    </Box>
                </Box>

                <Box mt={12}>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                        <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                        <Typography component={'h2'} fontSize={{xs: '18px', md: '24px'}} fontWeight={700} display={'flex'} gap={2}>
                            <span>مقالات</span>
                            <Skeleton width={'120px'} />
                        </Typography>
                    </Stack>

                    
                    <Box component={'div'} pt={{xs: 4 , sm: 8}}>
                
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        style={{paddingBottom: '15px'}}
                        modules={[Navigation]}
                        className="postsSwiper"
                        breakpoints={{
                            '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            },
                            '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            '@1.40': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            },
                            '@1.70': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                            },
                        }}
                        >

                            {numberOfPosts.map(post => (
                                <SwiperSlide key={post}>
                                    <PostCardSkeleton />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default AuthorDetailsSkeleton;