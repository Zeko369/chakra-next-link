import * as React from 'react';
import { useRouter } from 'next/router';
import { Link as ChakraLink, Button, IconButton } from '@chakra-ui/core';

import { LinkingComponent, external } from './LinkingComponent';
import { LinkProps, LinkButtonProps, LinkButtonIconProps } from './types';

const useIsActive = (href: string) => {
  const router = useRouter();
  return router && router.pathname === href;
};

export const Link: React.FC<LinkProps> = props => {
  const { as, href, children, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={as} {...rest}>
      <ChakraLink
        {...rest}
        isExternal={!as && external(href)}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </ChakraLink>
    </LinkingComponent>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = props => {
  const { as, href, children, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={as} {...rest}>
      <Button as="a" {...props} aria-current={isActive ? 'page' : undefined}>
        {children}
      </Button>
    </LinkingComponent>
  );
};

export const LinkIconButton: React.FC<LinkButtonIconProps> = props => {
  const { as, href, children, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={as} {...rest}>
      <IconButton as="a" {...rest} aria-current={isActive ? 'page' : undefined}>
        {children}
      </IconButton>
    </LinkingComponent>
  );
};
