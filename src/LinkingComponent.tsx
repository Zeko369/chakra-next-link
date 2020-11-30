import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { UrlObject } from 'url';

export type Url = string | UrlObject;
export const external = (url?: Url) => {
  if (!url) {
    return false;
  }

  return url.toString().startsWith('http');
};

export interface LinkingComponentProps extends Omit<LinkProps, 'href'> {
  href?: Url;
}

export const LinkingComponent: React.FC<LinkingComponentProps> = (props) => {
  const { as, href, children } = props;

  if (href === undefined || (!as && external(href))) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} as={as} passHref>
      {children}
    </NextLink>
  );
};
