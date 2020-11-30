import React from 'react';
import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';

import { Link, LinkButton, LinkIconButton } from '../../dist';

const Row: React.FC<{ href?: string; label: string; other?: any }> = ({
  href,
  label,
  other
}) => {
  return (
    <HStack>
      <Link href={href} {...other}>
        {label}
      </Link>
      <LinkButton href={href} {...other}>
        {label}
      </LinkButton>
      <LinkIconButton
        href={href}
        aria-label={label}
        icon={<ExternalLinkIcon />}
        {...other}
      />
    </HStack>
  );
};

const Home: NextPage = () => {
  return (
    <VStack p="4" alignItems="flex-start">
      <Heading>Different types of links</Heading>
      <Row href="/" label="this" />
      <Row
        href="/"
        label="this but with active attr"
        other={{ _activeLink: { color: 'blue.500' } }}
      />
      <Row href="/other" label="other" />
      <Row href="https://google.com" label="google" />
      <Row
        label="This is just a button link"
        other={{ onClick: () => alert('click') }}
      />
      <HStack>
        <Link href="/other" justLink>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading>Hello</Heading>
            <Text>World</Text>
          </Box>
        </Link>
        <Link href="https://google.com" justLink>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading>Google</Heading>
          </Box>
        </Link>
        <Link href="https://google.com" justLink isExternal={false}>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading>Google but same tab</Heading>
          </Box>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Home;
