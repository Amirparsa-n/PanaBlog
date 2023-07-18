import React, {useState, useEffect} from 'react';

import { validateComment } from './validateComment';

import toast, { Toaster } from 'react-hot-toast';

// graphQL
import { CREATE_COMMENT } from '../../GraphQl/mutation';
import { useMutation } from '@apollo/client';

// mui
import { Box, Button, Container, FormControl, Grid, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

// icons
import sendIcon from '../../assets/icons/send.svg';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const CommentForm = ({slug}) => {

    const [dataComment, setData] = useState({
        userName: '',
        email: '',
        text: ''
    }) 

    const [createComment, {loading, data, error}] = useMutation(CREATE_COMMENT, {
        variables: {userName: dataComment.userName, email: dataComment.email, text: dataComment.text, slug: slug}
    });

    const [errorComment, setError] = useState({})
    const [touched, setTouched] = useState({});


    const changeHandler = (e) => {
        setData({...dataComment, [e.target.name]: e.target.value})
    }

    const touchedHandler = (e) => {
        setTouched({...touched, [e.target.name]: true})
    }

    useEffect(() => {
        setError(validateComment(dataComment))
        console.log(errorComment);
    }, [dataComment])

    const submitComment = (e) => {
        e.preventDefault();

        if (Object.keys(errorComment).length) {
            setTouched({userName: true, email: true, text: true})
            toast.error('مقادیر فیلد را درست وارد کنید')
        } else {
            createComment()
            if (!loading && !error) {
                toast.success('کامنت شما با موفقت ارسال شد. منتظر تایید آن باشید.')
            }
        }
    }

    console.log(data);
        

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
                    <TextField variant="outlined" name='userName' helperText={errorComment.userName && touched.userName && errorComment.userName} error={errorComment.userName && touched.userName} value={dataComment.userName} onChange={changeHandler} onBlur={touchedHandler} label="نام کاربری" required sx={{width: '100%'}} />
                    <TextField variant="outlined" name='email' helperText={errorComment.email && touched.email && errorComment.email} error={errorComment.email && touched.email} value={dataComment.email} onChange={changeHandler} onBlur={touchedHandler} label="ایمیل" required sx={{width: '100%'}} />
                    
                </Stack>
                <TextField variant="outlined" name='text' helperText={errorComment.text && touched.text && errorComment.text} error={errorComment.text && touched.text} value={dataComment.text} onChange={changeHandler} onBlur={touchedHandler} label="نظر خود را بنویسید." required sx={{width: '100%', mt: 3}} multiline minRows={6} maxRows={8} />

                <LoadingButton
                loading={loading}
                loadingPosition="center"
                variant="contained"
                onClick={submitComment} 
                size='large' 
                sx={{mt: 4, display: 'flex', alignItems: 'center', gap: '8px'}}
                >
                    <span>ارسال</span>  
                    <Box component={'img'} src={sendIcon} alt='sendIcon'/>
                </LoadingButton>
            </Box>
        </div>
        </CacheProvider>
    );
};

export default CommentForm;