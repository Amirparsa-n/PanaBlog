import React from 'react';

// mui
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import {Skeleton} from '@mui/material';

const HotPostsSkeleton = () => {
    return (
        <>
        <div style={{marginTop: '120px'}}>
            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Box component={'div'} width={'12px'} height={'28px'} bgcolor='#2065BB' borderRadius={'5px'}></Box>
                <Typography component={'h2'} fontSize={{xs: '22px', md: '28px'}} fontWeight={700}>داغ‌ترین‌ ها</Typography>
            </Stack>

            <Grid container pt={{xs: 4 , sm: 8}} columnSpacing={{xs: 0, md: 3}} rowSpacing={{xs: 3, md: 0}}>
                <Grid item xs={12} md={9}>
                    <Box component={'div'} height={'100%'} px={{xs: '16px', sm: '28px'}} py={{xs: '12px', sm: '24px'}} borderRadius={'16px'} bgcolor={'white'} boxShadow={"0 0 15px 2px rgba(0,0,0,0.15)"}>

                        <Stack flexDirection={{xs: 'row-reverse' ,sm:'row'}} justifyContent={'space-between'} alignItems={{xs: 'center', sm: 'normal'}} columnGap={2}>
                            <Stack component={'div'} width={{xs: '100%', sm: '56%'}} flexDirection={'column'} justifyContent={'space-between'} >

                                <Stack>
                                    <Skeleton sx={{fontSize: {xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}, fontWeight: 600, height: {xs: '00px', sm: '34px', md:'40px'}}}/>
                                    <Skeleton sx={{fontSize: {xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}, fontWeight: 600, maxWidth: '310px', height: {xs: '00px', sm: '34px', md:'40px'}}}/>
                                </Stack>

                                <Stack>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" sx={{display: {xs: 'none', md: 'block'}}} />
                                    <Skeleton variant="text" sx={{display: {xs: 'none', md: 'block'}}} />
                                    <Skeleton variant="text" sx={{display: {xs: 'none', md: 'none', lg: 'block'}}}/>
                                </Stack>

                                <Stack display={{xs: 'none', sm: 'flex'}} flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '130px', height: '35px' }} />
                                    
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90px', height: '35px' }} />
                                </Stack>
                            </Stack>

                            <Skeleton animation="wave" variant="rounded" sx={{aspectRatio: '3 / 2', borderRadius: '16px', width: {xs: '182px', sm: '240px', md: '347px', lg: '422px'}, height: {xs: '80px', sm: '160px', md: '240px', lg: '290px'}}} />
                        </Stack>

                        <Stack display={{xs: 'flex', sm: 'none'}} mt={{xs: '10px', sm:'0'}}>

                            <Stack>
                                <Skeleton variant="text" height={'20px'} />
                                <Skeleton variant="text" height={'20px'} />
                                <Skeleton variant="text" height={'20px'} />
                            </Stack>

                            <Stack flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '130px', height: '35px' }} />
                                    
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90px', height: '35px' }} />
                            </Stack>
                        </Stack>
                    </Box>

                </Grid>

                <Grid item xs={12} md={3}>
                    <Box component={'div'} height={'100%'} px={{xs: '16px', sm: '28px'}} py={{xs: '12px', sm: '24px'}} borderRadius={'16px'} bgcolor={'white'} boxShadow={"0 0 15px 2px rgba(0,0,0,0.15)"}>
                        <Stack display={'flex'} flexDirection={{xs: 'row-reverse' ,sm:'row', md: 'column-reverse'}} justifyContent={{sx: 'normal', sm: 'space-between', md: 'normal'}} alignItems={{xs: 'center', sm: 'normal'}} rowGap={{xs: 0, sm: 1}} columnGap={{xs: 2, md:0}}>
                            <Stack component={'div'} width={{xs: '100%', sm: '56%', md: '100%'}} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} rowGap={{xs: 0 , md: 1.6}} >

                                <Stack display={{sx: 'none' ,sm: 'flex' }}>
                                    <Skeleton sx={{fontSize: {xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}, fontWeight: 600, height: {xs: '00px', sm: '34px', md:'40px'}}}/>
                                    <Skeleton sx={{fontSize: {xs: '14px', sm: '16px' ,md: '18px', lg: '20px'}, fontWeight: 600, maxWidth: '310px', height: {xs: '00px', sm: '34px', md:'40px'}}}/>
                                </Stack>

                                <Stack>
                                    <Skeleton variant="text" sx={{display: {xs: 'block', md: 'none', lg: 'none'}}} />
                                    <Skeleton variant="text" sx={{display: {xs: 'block', md: 'none', lg: 'none'}}} />
                                </Stack>

                                <Stack display={{xs: 'none', sm: 'flex'}} flexDirection={'row'} justifyContent={'space-between'} mt={{xs: 0, sm: 2, md: 0}}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80px', height: '35px' }} />
                                    
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60px', height: '35px' }} />
                                </Stack>

                            </Stack>
                            

                            <Skeleton animation="wave" variant="rounded" sx={{aspectRatio: '3 / 2', borderRadius: '16px', width: {xs: '182px', sm: '240px' , md:'100%'}, height: {xs: '80px', sm: '160px', md: '100px', lg: '145px'}}} />

                        </Stack>

                        <Stack display={{xs: 'flex', sm: 'none'}} mt={{xs: '10px', sm:'0'}}>

                            <Stack>
                                <Skeleton variant="text" height={'20px'} />
                                <Skeleton variant="text" height={'20px'} />
                                <Skeleton variant="text" height={'20px'} />
                            </Stack>

                            <Stack flexDirection={'row'} justifyContent={'space-between'} mt={2}>
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '130px', height: '35px' }} />
                                
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: '90px', height: '35px' }} />
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </div>
        </>
    );
};

export default HotPostsSkeleton;