import React from 'react';

// mui
import { Container } from '@mui/material';

// component
import HeaderBanner from '../components/HeaderBanner';
import HotPosts from '../components/HotPosts';

const HomePage = () => {

    return (
        <Container maxWidth={'xl'}>
            <HeaderBanner />

            <HotPosts />
        </Container>
    );
};

export default HomePage;