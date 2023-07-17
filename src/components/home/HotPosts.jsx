import React from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment-jalaali';

// mui
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

// Component
import HotPostsSkeleton from '../SkeletonLoading/HotPostsSkeleton';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_HOT_POSTS } from '../../graphQl/queries';

// icons
import dateIcon from '../../assets/icons/date.svg';
import nextIcon from '../../assets/icons/next.svg';

const HotPosts = ({ posts }) => {


    const {loading, data, error} = useQuery(GET_HOT_POSTS);

    const randomPosts = [];

    if (data) {
        while (randomPosts.length < 2) {
            const randomIndex = Math.floor(Math.random() * data.posts.length);
            const randomPost = data.posts[randomIndex];
    
            if (!randomPosts.includes(randomPost)) {
              randomPosts.push(randomPost);
            }
        }
    }

    
    if (loading) return (
        <HotPostsSkeleton />
    )
        
    if (error) return <h3>error</h3>

    return (
        <>
        <div style={{marginTop: '120px'}} id='hot'>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '22px', md: '28px'}} fontWeight={700}>داغ‌ترین‌ ها</Typography>
            </Stack>

            <Grid container pt={{xs: 4 , sm: 8}} columnSpacing={{xs: 0, md: 3}} rowSpacing={{xs: 3, md: 0}}>
                <Grid item xs={12} md={9}>
                    <Box component={'div'} height={'100%'} px={{xs: '16px', sm: '28px'}} py={{xs: '12px', sm: '24px'}} borderRadius={'16px'} bgcolor={'white'} boxShadow={"0 0 15px 2px rgba(0,0,0,0.15)"}>

                        <Stack flexDirection={{xs: 'row-reverse' ,sm:'row'}} justifyContent={'space-between'} alignItems={{xs: 'center', sm: 'normal'}} columnGap={2}>
                            <Stack component={'div'} width={{xs: '100%', sm: '56%'}} flexDirection={'column'} justifyContent={'space-between'} >
                                <Link to={`/blogs/${randomPosts[0].slug}`} >
                                    <Typography component={'h3'} fontSize={{xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}} fontWeight={600}>{randomPosts[0].title}</Typography>
                                </Link>
                                <Box component={'div'} fontSize={{xs: '14px', md: '18px'}} display={{xs: 'none', sm: 'none', md: '-webkit-box'}} className='fadeParagraph3' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: randomPosts[0].content.html}}></Box>
                                <Box component={'div'} fontSize={{xs: '14px', md: '18px'}} display={{xs: 'none', sm: '-webkit-box', md: 'none' }} className='fadeParagraph2' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: randomPosts[0].content.html}}></Box>

                                <Stack display={{xs: 'none', sm: 'flex'}} flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                    <Stack flexDirection={'row'} alignItems={'center'} columnGap={1}>
                                        <Box component={'img'} src={dateIcon} alt="dateIcon" width={{xs: '16px', md: '20px'}} />
                                        <Typography fontSize={{xs: '14px', md: '16px'}}>{moment(randomPosts[0].datePublished, 'YYYY-MM-DD').format('jYYYY/jM/jD')}</Typography>
                                    </Stack>
                                    
                                    <Link to={`/blogs/${randomPosts[0].slug}`}>
                                        <Button variant="text">ادامه مطلب</Button>
                                    </Link>
                                </Stack>
                            </Stack>

                            <Box>
                                <Link to={`/blogs/${randomPosts[0].slug}`} >
                                    <Box component={'img'} sx={{aspectRatio: '3 / 2', borderRadius: '16px'}} src={randomPosts[0].coverPhoto.url} alt={randomPosts[0].title} width={{xs: '120px', sm: '240px', md: '347px', lg: '422px'}} />
                                </Link>
                            </Box>
                        </Stack>

                        <Stack display={{xs: 'flex', sm: 'none'}} mt={{xs: '10px', sm:'0'}}>
                            <Box component={'div'} fontSize={'12px'} className='fadeParagraph3' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: randomPosts[0].content.html}}></Box>

                            <Stack flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                <Stack flexDirection={'row'} alignItems={'center'} columnGap={1}>
                                    <img src={dateIcon} alt="dateIcon" width={"14px"} />
                                    <Typography fontSize={'12px'}>{moment(randomPosts[0].datePublished, 'YYYY-MM-DD').format('jYYYY/jM/jD')}</Typography>
                                </Stack>
                                
                                <Link to={`/blogs/${randomPosts[0].slug}`}>
                                    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                        <Button variant="text" sx={{fontSize: '12px'}}>ادامه مطلب</Button>
                                        <img src={nextIcon} alt="nextIcon" width={"10px"} />
                                    </Stack>
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>

                </Grid>

                <Grid item xs={12} md={3}>
                    <Box component={'div'} height={'100%'} px={{xs: '16px', sm: '28px'}} py={{xs: '12px', sm: '24px'}} borderRadius={'16px'} bgcolor={'white'} boxShadow={"0 0 15px 2px rgba(0,0,0,0.15)"}>
                        <Stack display={'flex'} flexDirection={{xs: 'row-reverse' ,sm:'row', md: 'column-reverse'}} justifyContent={{sx: 'normal', sm: 'space-between', md: 'normal'}} alignItems={{xs: 'center', sm: 'normal'}} rowGap={{xs: 0, sm: 1}} columnGap={{xs: 2, md:0}}>
                            <Stack component={'div'} width={{xs: '100%', sm: '56%', md: '100%'}} flexDirection={'column'} justifyContent={'space-between'} rowGap={{xs: 0, sm: 1.545 , md: 2}} >
                                <Link to={`/blogs/${randomPosts[1].slug}`} >
                                    <Typography component={'h3'} display={{xs:'none' , md: '-webkit-box'}} fontSize={{xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}} fontWeight={600} className='fadeParagraphTitle'>{randomPosts[1].title}</Typography>
                                    <Typography component={'h3'} display={{xs:'block' , md: 'none'}}  fontSize={{xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}} fontWeight={600}>{randomPosts[1].title}</Typography>
                                </Link>

                                <Box component={'div'} fontSize={{xs: '14px', md: '18px'}} display={{xs: 'none', sm: '-webkit-box', md: 'none' }} className='fadeParagraph2' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: randomPosts[0].content.html}}></Box>

                                <Stack display={{xs: 'none', sm: 'flex'}} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} mt={{xs: 0, sm: 2, md: 0}}>
                                    <Stack flexDirection={'row'} alignItems={'center'} columnGap={1}>
                                        <Box component={'img'} src={dateIcon} alt="dateIcon" width={{xs: '16px', md: '20px'}} />
                                        <Typography fontSize={{xs: '14px', md: '16px'}}>{moment(randomPosts[1].datePublished, 'YYYY-MM-DD').format('jYYYY/jM/jD')}</Typography>
                                    </Stack>
                                    
                                    <Link to={`/blogs/${randomPosts[1].slug}`}>
                                        <Button variant="text">ادامه مطلب</Button>
                                    </Link>
                                </Stack>

                            </Stack>
                            

                            <Box>
                                <Link to={`/blogs/${randomPosts[1].slug}`} >
                                    <Box component={'img'} sx={{aspectRatio: {xs: '3 / 2', sm: '16/9'}, borderRadius: '16px'}} src={randomPosts[1].coverPhoto.url} alt={randomPosts[1].title} width={{xs: '120px', sm: '240px', md: '100%'}} />
                                </Link>
                            </Box>
                        </Stack>

                        <Stack display={{xs: 'flex', sm: 'none'}} mt={{xs: '10px', sm:'0'}}>
                            <Box component={'div'} fontSize={'12px'} className='fadeParagraph3' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: randomPosts[1].content.html}}></Box>

                            <Stack flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                <Stack flexDirection={'row'} alignItems={'center'} columnGap={1}>
                                    <img src={dateIcon} alt="dateIcon" width={"14px"} />
                                    <Typography fontSize={'12px'}>{moment(randomPosts[1].datePublished, 'YYYY-MM-DD').format('jYYYY/jM/jD')}</Typography>
                                </Stack>
                                
                                <Link to={`/blogs/${randomPosts[1].slug}`}>
                                    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                        <Button variant="text" sx={{fontSize: '12px'}}>ادامه مطلب</Button>
                                        <img src={nextIcon} alt="nextIcon" width={"10px"} />
                                    </Stack>
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </div>
        </>
    );
};

export default React.memo(HotPosts);