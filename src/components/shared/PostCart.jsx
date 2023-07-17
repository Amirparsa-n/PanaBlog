import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Box, Button, Stack, Typography } from '@mui/material';

// icons
import userIcon from '../../assets/icons/user.svg';

const PostCart = (post) => {

    return (
        <Stack bgcolor={'white'}  borderRadius={'12px'} style={{boxShadow:'0 0 20px -2px rgba(0,0,0,0.2)', borderRadius: '12px'}}>
            <Link to={`/blogs/${post.slug}`}>
                <Box component={'img'} width={'100%'} src={post.coverPhoto.url} alt={post.title} borderRadius={'12px'} sx={{aspectRatio: '16/10'}}/>
            </Link>

            <Stack p={2}>
                <Typography component={'p'} variant='span' color={'#6a7196'}fontSize={'12px'} mb={'4px'}>{post.category}</Typography>
                <Link to={`/blogs/${post.slug}`} style={{height: '74px', display: 'flex', alignItems:'center'}}>
                    <Typography fontWeight={700} className='fadeParagraphTitle3'>{post.title}</Typography>
                </Link>

                <Box component={'div'} mt={1} className='fadeParagraph3' textAlign='justify' fontSize={'15px'} dangerouslySetInnerHTML={{__html: post.content.html}}></Box>

                <Stack mt={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>

                    <Stack display={'flex'} columnGap={1} flexDirection={'row'} alignItems={'center'}>
                        <Box component={'img'} src={userIcon} alt='userIcon' />
                        <Typography component={'p'} fontSize={'13px'}>{post.authorPost.name}</Typography>
                    </Stack>
                    <Link to={`/blogs/${post.slug}`}>
                        <Button>ادامه مطلب</Button>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PostCart;