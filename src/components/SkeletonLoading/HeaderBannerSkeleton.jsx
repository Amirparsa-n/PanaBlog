import React from 'react';

// mui
import { Box, Grid, Stack, Typography } from '@mui/material';
import {Skeleton} from '@mui/material';


const HeaderBannerSkeleton = () => {
    return (
        <>
        <Grid container display={{xs: 'none', sm: 'flex'}} spacing={3} height={'624px'} marginTop={{xs: 4, md: 12}}>
            <Grid item xs={12} md={5}>
                <Box component={'div'} height={'600px'} sx={{backgroundColor: '#bfbfbf' ,borderRadius: '20px', position: 'relative'}}>
                    <Stack flexDirection={'column'} alignItems={'center'} columnGap={4} px={2}>
                        <Skeleton variant="text" width={'90%'} sx={{fontSize: '28px', position:'absolute', bottom:'130px'}} />
                        <Skeleton variant="text" width={'50%'} sx={{fontSize: '28px', position:'absolute', bottom:'80px'}} />
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={6} md={3} >
                <Box component={'div'} height={'600px'} sx={{backgroundColor: '#bfbfbf' ,borderRadius: '20px', position: 'relative'}}>
                    <Stack flexDirection={'column'} alignItems={'center'} columnGap={4} px={2}>
                        <Skeleton variant="text" width={'90%'} sx={{fontSize: '28px', position:'absolute', bottom:'130px'}} />
                        <Skeleton variant="text" width={'50%'} sx={{fontSize: '28px', position:'absolute', bottom:'80px'}} />
                    </Stack>
                </Box>
            </Grid>

            <Grid item xs={6} md={4} >
                <Box component={'div'} height={'600px'} sx={{backgroundColor: '#bfbfbf' ,borderRadius: '20px', position: 'relative'}}>
                    <Stack flexDirection={'column'} alignItems={'center'} columnGap={4} px={2}>
                        <Skeleton variant="text" width={'90%'} sx={{fontSize: '28px', position:'absolute', bottom:'130px'}} />
                        <Skeleton variant="text" width={'50%'} sx={{fontSize: '28px', position:'absolute', bottom:'80px'}} />
                    </Stack>
                </Box>
            </Grid>
        </Grid>

        <div className='BannerHeader'>
                <Box component={'div'} height={'600px'} sx={{backgroundColor: '#bfbfbf', borderRadius: '20px', position: 'relative'}}>
                    <Stack flexDirection={'column'} alignItems={'center'} columnGap={4} px={2}>
                        <Skeleton variant="text" width={'90%'} sx={{fontSize: '28px', position:'absolute', bottom:'130px'}} />
                        <Skeleton variant="text" width={'50%'} sx={{fontSize: '28px', position:'absolute', bottom:'80px'}} />
                    </Stack>
                </Box>
        </div>
        </>
    );
};

export default HeaderBannerSkeleton;