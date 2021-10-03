import React from 'react';
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { NextPage } from 'next';

import { ActiveLink, Link, LinkButton, LinkIconButton } from '../../dist';

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
      <ActiveLink href={href} {...other}>
        (active) {label}
      </ActiveLink>
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
      <Row
        label="This is disabled"
        href="/other"
        other={{ isDisabled: true }}
      />

      <Heading>
        {
          'Mention difference with official next routing when doing relative stuff ./'
        }
      </Heading>

      <Row label="/o1" href="/other" other={{ isExternal: true }} />
      <Row label="/g1" href="https://google.com" other={{ isExternal: true }} />
      <Row label="/o0" href="/other" other={{ isExternal: !1 }} />
      <Row label="/g0" href="https://google.com" other={{}} />
      <Row label="/o?" href="/other" other={{}} />
      <Row label="/g?" href="https://google.com" other={{}} />

      <Heading size="md">Using "justLink" prop to style other stuff</Heading>
      <HStack>
        <Link href="/other" justLink>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading size="sm">Hello</Heading>
            <Text>World</Text>
          </Box>
        </Link>
        <Link href="https://google.com" justLink>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading size="sm">Google</Heading>
          </Box>
        </Link>
        <Link href="https://google.com" justLink isExternal={false}>
          <Box shadow="md" borderRadius="md" p="5" cursor="pointer">
            <Heading size="sm">Google but same tab</Heading>
          </Box>
        </Link>

        <Heading size="md">{`IsExternal prop => [o -> /other, g -> https://google.com]`}</Heading>
      </HStack>
    </VStack>
  );
};

export default Home;
