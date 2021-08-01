import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { UrlObject } from 'url';
import { useRouter } from 'next/router';

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
  isDisabled?: boolean;
}

export const LinkingComponent: React.FC<LinkingComponentProps> = (props) => {
  const { as, href, children, justLink, isExternal, isDisabled } = props;

  const router = useRouter();

  let newHref = href?.toString();
  if (newHref?.startsWith('./')) {
    newHref = `${router.asPath}/${newHref.slice(2)}`;
  }

  if (isDisabled) {
    return <>{children}</>;
  }

  if (href === undefined || (!as && external(href)) || isExternal) {
    const props = {
      href: (as || href)?.toString(),
      ...(isExternal !== false && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    };

    return <a {...props}>{children}</a>;
  }

  return (
    <NextLink href={href} as={as} passHref={!justLink}>
      {children}
    </NextLink>
  );
};
