import React from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// mui
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_DETAILS } from '../graphQl/queries';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// component
import PostCardSkeleton from '../components/shared/PostCardSkeleton';
import PostCard from '../components/shared/PostCard';
import AuthorDetailsSkeleton from '../components/SkeletonLoading/AuthorDetailsSkeleton';

const AuthorDetails = () => {

    const {slug} = useParams()
    
    const {loading, data, error} = useQuery(GET_AUTHORS_DETAILS, {
        variables: {slug}
    });

    console.log(data);

        
    if (loading) return (
        <AuthorDetailsSkeleton />
    )
        
    if (error) return <h3>error</h3>


    return (
        <Box>
            <Stack bgcolor={'#F7F9FD'} py={3} mt={{xs: '-24px',sm: '-15px', md:'-6px'}}>
                <Container maxWidth={'xl'}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
                        <Avatar src={data.author.avatar.url} alt={data.author.name} sx={{width: {xs: '100px',sm: '150px', md: '200px'}, height: {xs: '100px',sm: '150px', md: '200px'}}} />

                        <Box component={'div'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={{xs: 1.5, md: 2}}>
                            <Typography component={'h1'} color={'secondary'} fontSize={{xs: '22px', md: '28px'}} fontWeight={600}>{data.author.name}</Typography>
                            <Typography component={'h4'} color={'GrayText'} fontSize={{xs: '16px',sm: '18px', md: '20px'}}>{data.author.field}</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Stack>

            <Container maxWidth={'xl'}>
                <Box mt={6}>
                    <Box component={'div'} fontSize={{xs: '14px', sm: '16px', md: '18px'}} lineHeight={2} dangerouslySetInnerHTML={{__html: data.author.description.html}}></Box>
                </Box>

                <Box mt={12}>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                        <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                        <Typography component={'h2'} fontSize={{xs: '18px', md: '24px'}} fontWeight={700}>مقالات {data.author.name}</Typography>
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

                            {data.author.posts.map(post => (
                                <SwiperSlide key={post.id}>
                                    <PostCard {...post} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </Box>

                </Box>
            </Container>
        </Box> 
    );
};

export default AuthorDetails;