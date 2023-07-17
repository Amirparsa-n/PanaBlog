import React from 'react';

import { useParams } from 'react-router-dom';
import moment from 'moment-jalaali';
import { Link } from 'react-router-dom';

// mui
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_POST_DETAILS } from '../graphQl/queries';

// component
import PostsRecommendedCard from '../components/shared/postsRecommendedCard';

const PostDetails = () => {

    const {slug} = useParams();
    moment.loadPersian({usePersianDigits: true})

    const {loading, data, error} = useQuery(GET_POST_DETAILS, {
        variables: {slug}
    });

    console.log(data);

    if (loading) return (
        <div>
            loading ...
        </div>
    )
        
    if (error) return <h3>error</h3>

    return (
        <div style={{marginTop: '120px'}}>
            <Container maxWidth={'xl'}>
                <Stack display={'flex'} flexDirection={{xs: 'column-reverse', md: 'row'}} justifyContent={'space-between'} alignItems={'center'} columnGap={{xs: 0, md: 6}} rowGap={{xs: 6, md: 0}}>
                    <Box component={'div'}>
                        <Typography component={'span'} color={'primary'} fontSize={{xs: '14px', md: '16px'}} fontWeight={400}>{data.post.category}</Typography>

                        <Typography component={'h1'} mt={3} color={'secondary'} lineHeight={2} fontSize={{xs: '20px', md: '22px', lg: '30px'}} fontWeight={800}>{data.post.title}</Typography>

                        <Stack mt={7} display={"flex"} flexDirection={'row'} alignItems={'center'} columnGap={2}>
                            <Link to={`/authors/${data.post.authorPost.slug}`}>
                                <Avatar src={data.post.authorPost.avatar.url} sx={{width: {sx: '', md: '40px'}, height: {sx: '' , md: '40px'}}}/>
                            </Link>
                            <Typography component={'p'} fontSize={{xs: '14px', md: '16px'}}>نوشته شده توسط <Box component={'span'}><Link to={`/authors/${data.post.authorPost.slug}`}>{data.post.authorPost.name}</Link></Box> در {moment(data.post.datePublished, 'YYYY-MM-DD').format('jYYYY/jM/jD')}</Typography>
                        </Stack>
                    </Box>

                    <Box component={'img'} width={{xs: '100%', sm: '80%' , md: '52%'}} src={data.post.coverPhoto.url} alt={data.post.title} borderRadius={'16px'}></Box>
                </Stack>

                <Box pt={12} display="grid" gridTemplateColumns={{xs: 'repeat(12, 1fr)', md: 'repeat(12, 1fr)'}} columnGap={{xs: 0, md: 4, lg: 10}} rowGap={{xs: 10, md: 0}}>

                    <Box gridColumn={{xs: 'span 12', md: 'span 8'}}>
                        <Box component={'div'} className='postContent' fontSize={'18px'} lineHeight={2.8} dangerouslySetInnerHTML={{__html: data.post.content.html}}></Box>
                    </Box>

                    <Box gridColumn={{xs: 'span 12', md: 'span 4'}}>
                        <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                            <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                            <Typography component={'h2'} fontSize={{xs: '20px', md: '24px'}} fontWeight={700}>تازه ترین ها</Typography>
                        </Stack>

                        <Box mt={4}>
                            <Stack display={'flex'} flexDirection={'column'} rowGap={4}>
                                {data.posts.map(post => (
                                    <PostsRecommendedCard {...post} key={post.id} />
                                ))}
                            </Stack>
                        </Box>
                    </Box>

                </Box>

            </Container>
        </div>
    );
};

export default PostDetails;




