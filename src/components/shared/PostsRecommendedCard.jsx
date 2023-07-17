import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Avatar, Box, Container, Grid, Stack, Typography, Button } from '@mui/material';

// icons
import nextIcon from '../../assets/icons/next.svg';

const PostsRecommendedCard = ({ title, slug, coverPhoto }) => {
    return (
        <Box component={'div'} boxShadow={"0 0 15px 1px rgba(0, 0, 0, 0.15)"} borderRadius={'12px'}>
            <Stack display={'flex'} flexDirection={'row'} p={'12px'} columnGap={2}>
                <Link to={`/blogs/${slug}`}>
                    <Box component={'img'} sx={{aspectRatio: '4/3'}} borderRadius={'12px'} width={{xs: '120px', sm: '200px', md: '100px', lg: '130px'}} src={coverPhoto.url} alt={title} />
                </Link>

                <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} width={'100%'}>
                <Link to={`/blogs/${slug}`}>
                    <Typography color={'black'} component={'h4'} fontSize={{xs: '',sm: '16px', md: '12px', lg: '14px'}} lineHeight={2} fontWeight={600} className='fadeParagraphTitle3'>{title}</Typography>
                </Link>

                    <Box component={'div'} alignSelf={'end'} pl={1}>
                        <Link to={`/blogs/${slug}`}>
                            <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} columnGap={1}>
                                <Typography color={"primary"} sx={{fontSize: {xs: '12px', md: '14px'}}}>ادامه</Typography>
                                <img src={nextIcon} alt="nextIcon" width={"10px"} />
                            </Stack>
                        </Link>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default PostsRecommendedCard;