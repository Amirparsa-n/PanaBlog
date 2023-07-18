import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

import { BrowserRouter } from 'react-router-dom'

// graphQl
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// mui
import { ThemeProvider } from '@mui/material/styles';
import theme from './mui/theme';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  // </React.StrictMode>,
)
