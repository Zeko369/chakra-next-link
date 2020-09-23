import * as React from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Button,
  ButtonProps as ChakraButtonProps,
  IconButton,
  IconButtonProps as ChakraButtonIconProps,
} from '@chakra-ui/core';
import NextLink from 'next/link';

export interface LinkProps extends Omit<ChakraLinkProps, 'as'> {
  as?: string;
}

const LinkingComponent: React.FC<{ as?: string; href: string }> = ({
  as,
  href,
  children,
  ...props
}) => {
  if (!as && href.startsWith('http')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} passHref as={as}>
      {children}
    </NextLink>
  );
};

export const Link: React.FC<LinkProps> = ({ as, href, children, ...props }) => {
  return (
    // fix this
    <LinkingComponent href={href || ''} as={as} {...props}>
      <ChakraLink {...props}>{children}</ChakraLink>
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
  return (
    <NextLink href={href} passHref as={as}>
      <Button as="a" {...props}>
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
  return (
    <NextLink href={href} passHref as={as}>
      <IconButton as="a" {...props}>
        {children}
      </IconButton>
    </NextLink>
  );
};
