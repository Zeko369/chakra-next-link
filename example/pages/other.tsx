import React, { useEffect } from 'react';
import { Heading } from '@chakra-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Other: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return <Heading>Other page, ... redirecting back</Heading>;
};

export default Other;
