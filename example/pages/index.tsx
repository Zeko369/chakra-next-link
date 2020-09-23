import React from 'react';
import { Container, HStack, Stack } from '@chakra-ui/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';

import { Link, LinkButton, LinkIconButton } from '../../dist';

const Home: NextPage = () => {
  return (
    <Container mt="4">
      <HStack>
        <Link href="/other">To other page</Link>
        <LinkButton href="/other">To other page</LinkButton>
        <LinkIconButton
          href="/other"
          aria-label="other page"
          icon={<ExternalLinkIcon />}
        >
          To other page
        </LinkIconButton>
      </HStack>
    </Container>
  );
};

export default Home;
