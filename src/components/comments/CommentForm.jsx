import React, {useState, useEffect} from 'react';

import { validateComment } from './validateComment';

// graphQL
import { CREATE_COMMENT } from '../../GraphQl/mutation';

// mui
import { Box, Button, Container, FormControl, Grid, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// icons
import sendIcon from '../../assets/icons/send.svg';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const CommentForm = () => {

    const [data, setData] = useState({
        userName: '',
        email: '',
        text: ''
    }) 

    const [error, setError] = useState({})
    const [onFocus, setOnFocus] = useState(false);


    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setError(validateComment(data))
        console.log(error);
    }, [data])

    console.log(onFocus);

    return (
        <CacheProvider value={cacheRtl}>
        <div style={{marginTop: '120px'}} id='comment'>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '18px', md: '22px'}} fontWeight={700}>دیدگاه‌ها و نظرات خود را بنویسید</Typography>
            </Stack>

            <Box component={'div'} boxShadow={'0 0 15px 0px rgba(0,0,0,0.1)'} mt={4} p={4} borderRadius={'16px'}>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={3}>
                    <TextField variant="outlined" name='userName' helperText={error.userName} error={false} value={data.userName} onChange={changeHandler} label="نام کاربری" required sx={{width: '100%'}} />
                    <TextField variant="outlined" name='email' helperText={error.email} error={false} value={data.email} onChange={changeHandler} label="ایمیل" required sx={{width: '100%'}} />
                    
                </Stack>
                <TextField variant="outlined" name='text' helperText={error.text} error={false} value={data.text} onChange={changeHandler} label="نظر خود را بنویسید." required sx={{width: '100%', mt: 3}} multiline minRows={6} maxRows={8} />

                <Button variant="contained" size='large' sx={{mt: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span>ارسال</span>  
                    <Box component={'img'} src={sendIcon} alt='sendIcon'/>
                </Button>
            </Box>
        </div>
        </CacheProvider>
    );
};

export default CommentForm;