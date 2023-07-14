import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Box, Grid, Typography } from '@mui/material';


const HeaderBanner = ({posts}) => {

    const randomPosts = [];

    while (randomPosts.length < 3) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        const randomPost = posts[randomIndex];

        if (!randomPosts.includes(randomPost)) {
          randomPosts.push(randomPost);
        }
    }

    console.log(randomPosts);

    return (
        <Grid container spacing={3} mt={16} height={'600px'} marginTop={{xs: 4, md: 12}}>
            <Grid item xs={12} md={5}>
                <Link to={randomPosts[0].slug}>
                    <Box component={'div'} height={'600px'} sx={{background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9) 100%) ,url(${randomPosts[0].coverPhoto.url}) no-repeat top`, backgroundSize: 'cover', borderRadius: '20px', position: 'relative'}}>
                        <Box >
                            <Typography px={2} component={'h3'} variant='h5' lineHeight={2} color={'white'} fontWeight={700} textAlign={'center'} position={'absolute'} bottom={'80px'}>
                                {randomPosts[0].title}
                            </Typography>
                        </Box>
                    </Box>
                </Link>
            </Grid>

            <Grid item xs={6} md={3} >
                <Link to={randomPosts[1].slug}>
                    <Box component={'div'} height={'600px'} sx={{background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9) 100%) ,url(${randomPosts[1].coverPhoto.url}) no-repeat top`, backgroundSize: 'cover', borderRadius: '20px', position: 'relative'}}>
                        <Typography px={2} component={'h3'} variant='h5' lineHeight={2} color={'white'} fontWeight={700} textAlign={'center'} position={'absolute'} bottom={'80px'}>
                            {randomPosts[1].title}
                        </Typography>
                    </Box>
                </Link>
            </Grid>

            <Grid item xs={6} md={4} >
                <Link to={randomPosts[2].slug}>
                    <Box component={'div'} height={'600px'} sx={{background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.9) 100%) ,url(${randomPosts[2].coverPhoto.url}) no-repeat top`, backgroundSize: 'cover', borderRadius: '20px', position: 'relative'}}>
                        <Typography px={2} component={'h3'} variant='h5' lineHeight={2} color={'white'} fontWeight={700} textAlign={'center'} position={'absolute'} bottom={'80px'}>
                                {randomPosts[2].title}
                        </Typography>
                    </Box>
                </Link>
            </Grid>
        </Grid>
    );
};

export default HeaderBanner;