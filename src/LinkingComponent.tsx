import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { UrlObject } from 'url';

type Url = string | UrlObject;

export const external = (href: Url) => href.toString().startsWith('http');
export const LinkingComponent: React.FC<LinkProps> = (props) => {
  const { as, href, children } = props;

  if (!as && external(href)) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} passHref as={as}>
      {children}
    </NextLink>
  );
};
