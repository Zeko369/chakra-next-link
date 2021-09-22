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

export { LinkProps, LinkButtonProps, LinkButtonIconProps };

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
  const {
    nextAs,
    href,
    children,
    linkProps,
    justLink,
    isDisabled,
    noUnderline,
    nativeAnchor,
    ...rest
  } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent
      href={href}
      as={nextAs}
      justLink={justLink}
      isExternal={(rest as any).isExternal}
      isDisabled={isDisabled}
      nativeAnchor={nativeAnchor}
      {...linkProps}
    >
      {justLink ? (
        children
      ) : (
        <ChakraLink
          {...(noUnderline && {
            _hover: { textDecoration: 'none !important' }
          })}
          isExternal={(rest as any).isExternal || (!nextAs && external(href))}
          {...(isDisabled && {
            cursor: 'not-allowed',
            opacity: '0.4',
            _hover: {
              textDecoration: 'none'
            }
          })}
          aria-current={isActive ? 'page' : undefined}
          {...rest}
        >
          {children}
        </ChakraLink>
      )}
    </LinkingComponent>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const {
    nextAs,
    href,
    children,
    isDisabled,
    linkProps,
    isExternal,
    nativeAnchor,
    ...rest
  } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent
      isExternal={isExternal}
      href={href}
      as={nextAs}
      isDisabled={isDisabled}
      nativeAnchor={nativeAnchor}
      {...linkProps}
    >
      <Button
        as={asHelper(href)}
        aria-current={isActive ? 'page' : undefined}
        isDisabled={isDisabled}
        {...rest}
      >
        {children}
      </Button>
    </LinkingComponent>
  );
};

export const LinkIconButton: React.FC<LinkButtonIconProps> = (props) => {
  const {
    nextAs,
    href,
    children,
    isDisabled,
    linkProps,
    isExternal,
    nativeAnchor,
    ...rest
  } = props;
  const isActive = useIsActive(href);

  return (
    <LinkingComponent
      isExternal={isExternal}
      href={href}
      as={nextAs}
      isDisabled={isDisabled}
      nativeAnchor={nativeAnchor}
      {...linkProps}
    >
      <IconButton
        as={asHelper(href)}
        // ADD DISABLED
        aria-current={isActive ? 'page' : undefined}
        isDisabled={isDisabled}
        {...rest}
      >
        {children}
      </IconButton>
    </LinkingComponent>
  );
};
