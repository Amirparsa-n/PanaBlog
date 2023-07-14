import React from 'react';

// mui
import { Container } from '@mui/material';

// component
import HeaderBanner from '../components/HeaderBanner';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/queries';

const HomePage = () => {

    const {loading, data, error} = useQuery(GET_ALL_POSTS);

    if (loading) return <h3>Loading ....</h3>
    if (error) return <h3>error</h3>

    return (
        <Container maxWidth={'xl'}>
            <HeaderBanner {...data} />

            HomePage
        </Container>
    );
};

export default HomePage;