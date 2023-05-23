import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HeaderUpdates from '../Components/HeaderUpdates';
import Seo from '../Components/Seo';
import './App.css';

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Sans,Sans-serif',
    body: 'IBM Plex Sans,Sans-serif',
  },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <ChakraProvider theme={theme}>
        <HeaderUpdates />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
