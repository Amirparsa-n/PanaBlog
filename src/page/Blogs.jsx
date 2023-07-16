import React, { useState } from 'react';

// mui
import { Box, Container, Grid, Pagination, Stack, Typography } from '@mui/material';

// graphQl
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphQl/queries';

// components
import PostCart from '../components/shared/PostCart';
import PostCartSkeleton from '../components/shared/PostCartSkeleton';

const Blogs = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, data, error } = useQuery(GET_ALL_POSTS);

  const numberOfPosts = [1,2,3,4,5,6,7,8,9,10,11,12]
//   if (loading) return <div style={{ minHeight: '100vh' }}></div>;

    if (error) return <h3>error</h3>;
    
    let postsPerPage = 12;

    if (!loading) {
        let indexOfLastExercise = currentPage * postsPerPage;
        let indexOfFirstExercise = indexOfLastExercise - postsPerPage;
        var currentPosts = data.posts.slice(indexOfFirstExercise, indexOfLastExercise);
    }

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 20, behavior: 'smooth' });
  };

  return (
    <div style={{ marginTop: '120px' }}>
      <Container maxWidth="xl" style={{ padding: '0 16px' }}>
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <Box component="div" width="12px" height="28px" bgcolor="#2065BB" borderRadius="5px"></Box>
          <Typography component="h2" fontSize={{ xs: '22px', md: '28px' }} fontWeight={700}>
            مقالات
          </Typography>
        </Stack>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
          gap="30px"
          marginTop={{ xs: 4, sm: 5, md: 6 }}
        >

            {loading ? 
            numberOfPosts.map((post) => (
                <PostCartSkeleton key={post} />
            ))
            :
            
            currentPosts.map((post) => (
                <PostCart {...post} key={post.id} />
            ))
            }
        </Box>

        <Box component="div" display="flex" justifyContent="center" mt={8}>
          {!loading && data && (
            <Pagination
              count={Math.ceil(data.posts.length / postsPerPage)}
              variant="outlined"
              defaultPage={1}
              color="primary"
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Blogs;
