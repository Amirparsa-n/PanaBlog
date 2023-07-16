import React from 'react';

// mui
import { Container } from '@mui/material';

// component
import HeaderBanner from '../components/home/HeaderBanner';
import HotPosts from '../components/home/HotPosts';
import NewPosts from '../components/home/NewPosts';
import Authors from '../components/home/Authors';

const HomePage = () => {

    return (
        <Container maxWidth={'xl'}>
            <HeaderBanner />

            <HotPosts />

            <NewPosts />

            <Authors />
        </Container>
    );
};

export default HomePage;