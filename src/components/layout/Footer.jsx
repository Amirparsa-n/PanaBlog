import React from 'react';
import { Box, Stack, Container, Avatar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

// image
import logo from '../../assets/images/logo.png';

// icons
import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import discord from '../../assets/icons/discord.svg';
import gmail from '../../assets/icons/envelope-solid.svg';
import copyRight from '../../assets/icons/copyRight.svg';

const Footer = () => {
    return (
        
        <Box bgcolor={'#F0F4FC'} mt={12}>
            <Container maxWidth='xl'>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={{xs: 'space-around' , sm:'space-between'}} rowGap={{xs: 4, sm: 0}} columnGap={{xs: 12, sm: 0}} alignItems={'center'} pt={4} flexWrap={'wrap'}>
                    <Box component={'img'} src={logo} alt={'logo'} width={{xs: '120px', sm: '150px' , md:'150px'}} />

                    <Stack display={'flex'} flexDirection={'row'} columnGap={3}>
                        <a href='https://instagram.com/amirparsa366' target='__blank' className='footerStoicalItems'>
                            <Avatar sx={{ bgcolor: '#2065BB', width: {xs: '40px' ,sm:'50px', md: '60px'}, height: {xs: '40px' ,sm:'50px', md: '60px'} }}>
                                <Box component={'img'} src={instagram} alt={'instagramIcon'} width={{xs: '20px', sm: '25px' ,md:'30px'}}/>
                            </Avatar>
                        </a>

                        <a href='https://github.com/Amirparsa-n' target='__blank' className='footerStoicalItems'>
                            <Avatar sx={{ bgcolor: '#2065BB', width: {xs: '40px' ,sm:'50px', md: '60px'}, height: {xs: '40px' ,sm:'50px', md: '60px'} }}>
                                <Box component={'img'} src={github} alt={'instagramIcon'} width={{xs: '20px', sm: '25px' ,md:'30px'}}/>
                            </Avatar>
                        </a>

                        <a href='https://discord.com/users/752868025958400061' target='__blank' className='footerStoicalItems'>
                            <Avatar sx={{ bgcolor: '#2065BB', width: {xs: '40px' ,sm:'50px', md: '60px'}, height: {xs: '40px' ,sm:'50px', md: '60px'} }}>
                                <Box component={'img'} src={discord} alt={'instagramIcon'} width={{xs: '20px', sm: '25px' ,md:'30px'}}/>
                            </Avatar>
                        </a>
                        
                        <a href='mailto: amirparsanaghibi@gmail.com' target='__blank' className='footerStoicalItems'>
                            <Avatar sx={{ bgcolor: '#2065BB', width: {xs: '40px' ,sm:'50px', md: '60px'}, height: {xs: '40px' ,sm:'50px', md: '60px'} }}>
                                <Box component={'img'} src={gmail} alt={'instagramIcon'} width={{xs: '20px', sm: '25px' ,md:'30px'}}/>
                            </Avatar>
                        </a>
                    </Stack>
                </Stack>    
                <Box component={'div'} mt={4} pb={2}>
                    <Typography component={'p'} fontSize={{xs: '12px', sm: '14px', lg: '16px'}} variant='p' color={'GrayText'} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'} columnGap={1} className='copyrightTextFooter'>
                        <span>ساخته شده توسط <Box component={'a'} className='amirparsanaghibi' href="https://amirparsanaghibi.ir" target='__blank' color={'GrayText'}>امیرپاسا نقیبی</Box></span>
                        <Box component={'img'} src={copyRight} alt='copyRightIcon' />
                    </Typography>
                    
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;