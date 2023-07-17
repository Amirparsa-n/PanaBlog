import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_ALL_AUTHOR } from '../../graphQl/queries';

// Component
import AuthorsCart from '../shared/AuthorsCart';
import AuthorsCartSkeleton from '../SkeletonLoading/AuthorsCartSkeleton';

const Authors = () => {

    const {loading, data, error} = useQuery(GET_ALL_AUTHOR);

    const numberOfAuthors = [1,2,3,4,5,6]
        
    if (error) return <h3>error</h3>

    return (
        <div style={{marginTop: '120px'}} id='authors'>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '22px', md: '28px'}} fontWeight={700}>نویسنده ها</Typography>
            </Stack>

            <Box component={'div'} pt={{xs: 4 , sm: 6}}>

            <Swiper
                slidesPerView={6}
                spaceBetween={40}
                freeMode={true}
                style={{padding: '10px'}}
                pagination={{
                clickable: true,
                dynamicBullets: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    '@0.00': {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    '@0.85': {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    '@1.30': {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    '@1.70': {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                    '@2.00': {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                }}
            >
                {loading ? 
                
                numberOfAuthors.map(item => (
                    <SwiperSlide key={item}>
                        <AuthorsCartSkeleton />
                    </SwiperSlide>
                ))

                : 
                
                data.authors.map(author => (
                    <SwiperSlide key={author.id}>
                        <AuthorsCart {...author} />
                    </SwiperSlide>
                ))
                }

            </Swiper>

            </Box>
        </div>
    );
};

export default Authors;