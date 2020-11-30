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
  justLink?: boolean;
  isExternal?: boolean;
}

export const LinkingComponent: React.FC<LinkingComponentProps> = (props) => {
  const { as, href, children, justLink, isExternal } = props;

  if (href === undefined || (!as && external(href)) || isExternal) {
    if (justLink) {
      const props = {
        href: (as || href)?.toString(),
        ...(isExternal !== false && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })
      };

      return <a {...props}>{children}</a>;
    }

    return <>{children}</>;
  }

  return (
    <NextLink href={href} as={as} passHref={!justLink}>
      {children}
    </NextLink>
  );
};
