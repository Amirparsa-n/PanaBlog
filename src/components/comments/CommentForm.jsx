import React, {useState, useEffect} from 'react';

import { validateComment } from './validateComment';

import toast, { Toaster } from 'react-hot-toast';

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
    const [touched, setTouched] = useState({});


    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const touchedHandler = (e) => {
        setTouched({...touched, [e.target.name]: true})
    }

    useEffect(() => {
        setError(validateComment(data))
        console.log(error);
    }, [data])

    const submitComment = (e) => {
        e.preventDefault();

        if (Object.keys(error).length) {
            setTouched({userName: true, email: true, text: true})
            toast.error('مقادیر فیلد را درست وارد کنید')
        } else {
            
        }
    }


    return (
        <CacheProvider value={cacheRtl}>
        <div style={{marginTop: '120px'}} id='comment'>

            <Toaster/>

            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '18px', md: '22px'}} fontWeight={700}>دیدگاه‌ها و نظرات خود را بنویسید</Typography>
            </Stack>

            <Box component={'div'} boxShadow={'0 0 15px 0px rgba(0,0,0,0.1)'} mt={4} p={4} borderRadius={'16px'}>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} gap={3}>
                    <TextField variant="outlined" name='userName' helperText={error.userName && touched.userName && error.userName} error={error.userName && touched.userName} value={data.userName} onChange={changeHandler} onBlur={touchedHandler} label="نام کاربری" required sx={{width: '100%'}} />
                    <TextField variant="outlined" name='email' helperText={error.email && touched.email && error.email} error={error.email && touched.email} value={data.email} onChange={changeHandler} onBlur={touchedHandler} label="ایمیل" required sx={{width: '100%'}} />
                    
                </Stack>
                <TextField variant="outlined" name='text' helperText={error.text && touched.text && error.text} error={error.text && touched.text} value={data.text} onChange={changeHandler} onBlur={touchedHandler} label="نظر خود را بنویسید." required sx={{width: '100%', mt: 3}} multiline minRows={6} maxRows={8} />

                <Button variant="contained" onClick={submitComment} size='large' sx={{mt: 4, display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span>ارسال</span>  
                    <Box component={'img'} src={sendIcon} alt='sendIcon'/>
                </Button>
            </Box>
        </div>
        </CacheProvider>
    );
};

export default CommentForm;