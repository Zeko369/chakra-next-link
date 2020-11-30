import * as React from 'react';
import { useRouter } from 'next/router';
import { Link as ChakraLink, Button, IconButton } from '@chakra-ui/react';

import { LinkingComponent, external } from './LinkingComponent';
import { LinkProps, LinkButtonProps, LinkButtonIconProps } from './types';

const useIsActive = (href: string) => {
  const router = useRouter();
  return router && router.pathname === href;
};

export const Link: React.FC<LinkProps> = (props) => {
  const { nextAs, href, children, linkProps, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...linkProps}>
      <ChakraLink
        {...rest}
        isExternal={!nextAs && external(href)}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </ChakraLink>
    </LinkingComponent>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { nextAs, href, children, linkProps, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...linkProps}>
      <Button as="a" {...rest} aria-current={isActive ? 'page' : undefined}>
        {children}
      </Button>
    </LinkingComponent>
  );
};

export const LinkIconButton: React.FC<LinkButtonIconProps> = (props) => {
  const { nextAs, href, children, linkProps, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...linkProps}>
      <IconButton as="a" {...rest} aria-current={isActive ? 'page' : undefined}>
        {children}
      </IconButton>
    </LinkingComponent>
  );
};
