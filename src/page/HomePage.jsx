import React from 'react';

// mui
import { Container } from '@mui/material';

// component
import HeaderBanner from '../components/HeaderBanner';
import HotPosts from '../components/HotPosts';
import NewPosts from '../components/NewPosts';

const HomePage = () => {

    return (
        <Container maxWidth={'xl'}>
            <HeaderBanner />

            <HotPosts />

            <NewPosts />
        </Container>
    );
};

export default HomePage;