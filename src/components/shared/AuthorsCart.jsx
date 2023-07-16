import React from 'react';

import { Link } from 'react-router-dom';

// mui
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material';

const AuthorsCart = ({ avatar, field, name, slug }) => {

    return (
        <Link to={slug}>
            <Box component={'div'} className='AuthorsCart' bgcolor={'white'} borderRadius={'16px'} boxShadow={'0 0 10px 0px rgba(0,0,0,0.1)'}>
                <Stack display={'flex'} flexDirection={'column'} alignItems={'center'} p={3}>
                    <Avatar
                    alt={name}
                    src={avatar.url}
                    sx={{ width: '100px', height: '100px' }}
                    className='AuthorsAvatar'
                    />

                    <Box component={'div'} textAlign={'center'} mt={3}>
                        <Typography component={"h4"} color={'black'} fontSize={{xs: '16px' , sm: '18px'}} fontWeight={500}>{name}</Typography>
                        <Typography component={"p"} mt={1} fontSize={{xs: '12px' , sm: '14px'}} color={'GrayText'}>{field}</Typography>
                    </Box>
                </Stack>
            </Box>
        </Link>
    );
};

export default AuthorsCart;