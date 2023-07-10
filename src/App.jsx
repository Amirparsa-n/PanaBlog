import React from 'react'

import {gql, useQuery} from '@apollo/client'
import { Typography } from '@mui/material';
 
const QUERY = gql`
  query {
    authors {
      name,
    }
  }
`;

function App() {

  const {loading, data} = useQuery(QUERY)
  console.log(data);
  return (
    <div>
      <Typography component={"h1"}>شروع پروژه وبلاگ امیرپارسا نقیبی</Typography>
    </div>
  )
}

export default App
