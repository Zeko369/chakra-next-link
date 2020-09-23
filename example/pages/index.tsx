import React from 'react';
import { Container, Heading, HStack, VStack } from '@chakra-ui/core';
import { ExternalLinkIcon, SearchIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';

import { Link, LinkButton, LinkIconButton } from '../../dist';

const Row: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <HStack>
      <Link href={href}>{label}</Link>
      <LinkButton href={href}>{label}</LinkButton>
      <LinkIconButton
        href={href}
        aria-label={label}
        icon={<ExternalLinkIcon />}
      />
    </HStack>
  );
};

const Home: NextPage = () => {
  return (
    <VStack p="4" alignItems="flex-start">
      <Heading>Different types of links</Heading>
      <Row href="/" label="this" />
      <Row href="/other" label="other" />
      <Row href="https://google.com" label="google" />
    </VStack>
  );
};

export default Home;
