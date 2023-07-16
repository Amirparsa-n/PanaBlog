import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_News_POST } from '../../graphQl/queries';

// Icons
import morePostIcon from '../../assets/icons/morePost.svg';

// components
import PostCart from '../shared/PostCart';
import NewPostsSkeleton from '../SkeletonLoading/NewPostsSkeleton';

const NewPosts = () => {

    const {loading, data, error} = useQuery(GET_News_POST);

    if (loading) return (
        <div>
            <NewPostsSkeleton />
        </div>
    )
        
    if (error) return <h3>error</h3>


    return (
        <div style={{marginTop: '120px'}}>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '22px', md: '28px'}} fontWeight={700}>تازه ترین ها</Typography>
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
                    {data.posts.map(post => (
                        <SwiperSlide key={post.id}>
                            <PostCart {...post} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Box>

            <Box component={'div'} mt={4}>
                <Link to={'/blogs'}>
                    <button className='morePost'>
                        <img src={morePostIcon} alt="morePostIcon" />
                        <span>مشاهده مطالب بیشتر</span>
                    </button>
                </Link>
            </Box>

        </div>
    );
};

export default NewPosts;