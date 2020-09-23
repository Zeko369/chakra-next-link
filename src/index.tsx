import * as React from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Button,
  ButtonProps as ChakraButtonProps,
  IconButton,
  IconButtonProps as ChakraButtonIconProps,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export type LinkProps = Omit<ChakraLinkProps, 'as'> & {
  as?: string;
  href: string;
};

const external = (href: string) => href.startsWith('http');

const LinkingComponent: React.FC<{ as?: string; href: string }> = ({
  as,
  href,
  children,
}) => {
  if (!as && external(href)) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} passHref as={as}>
      {children}
    </NextLink>
  );
};

const useIsActive = (href: string) => {
  const { pathname } = useRouter();
  return pathname === href;
};

export const Link: React.FC<LinkProps> = ({ as, href, children, ...props }) => {
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={as} {...props}>
      <ChakraLink
        {...props}
        isExternal={!as && external(href)}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </ChakraLink>
    </LinkingComponent>
  );
};

export interface LinkButtonProps extends Omit<ChakraButtonProps, 'as'> {
  href: string;
  as?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  as,
  href,
  children,
  ...props
}) => {
  const isActive = useIsActive(href);

  return (
    <NextLink href={href} passHref as={as}>
      <Button as="a" {...props} aria-current={isActive ? 'page' : undefined}>
        {children}
      </Button>
    </NextLink>
  );
};

export interface LinkButtonIconProps extends Omit<ChakraButtonIconProps, 'as'> {
  href: string;
  as?: string;
}

export const LinkIconButton: React.FC<LinkButtonIconProps> = ({
  as,
  href,
  children,
  ...props
}) => {
  const isActive = useIsActive(href);

  return (
    <NextLink href={href} passHref as={as}>
      <IconButton
        as="a"
        {...props}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </IconButton>
    </NextLink>
  );
};
