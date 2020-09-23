import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/core';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
