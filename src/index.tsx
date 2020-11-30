import * as React from 'react';
import { useRouter } from 'next/router';
import {
  Link as ChakraLink,
  Button,
  IconButton,
  ButtonProps
} from '@chakra-ui/react';

import { LinkingComponent, external, Url } from './LinkingComponent';
import { LinkProps, LinkButtonProps, LinkButtonIconProps } from './types';

const useIsActive = (href?: string) => {
  const router = useRouter();

  if (!href) {
    return false;
  }

  return router && router.pathname === href;
};

const asHelper = (
  href?: Url,
  defaultVal: ButtonProps['as'] = 'a'
): ButtonProps['as'] => {
  if (!href) {
    return 'button';
  }

  return defaultVal;
};

export const Link: React.FC<LinkProps> = (props) => {
  const { nextAs, href, children, linkProps, ...rest } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent href={href} as={nextAs} {...linkProps}>
      <ChakraLink
        as={asHelper(href)}
        href={href}
        isExternal={!nextAs && external(href)}
        {...rest}
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
      <Button
        as={asHelper(href)}
        href={href}
        aria-current={isActive ? 'page' : undefined}
        {...rest}
      >
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
      <IconButton
        as={asHelper(href)}
        href={href}
        aria-current={isActive ? 'page' : undefined}
        {...rest}
      >
        {children}
      </IconButton>
    </LinkingComponent>
  );
};
