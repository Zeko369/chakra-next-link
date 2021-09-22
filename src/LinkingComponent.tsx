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
  nativeAnchor?: boolean;
}

export const LinkingComponent: React.FC<LinkingComponentProps> = (props) => {
  const {
    as,
    href,
    children,
    justLink,
    isExternal,
    isDisabled,
    nativeAnchor
  } = props;

  const router = useRouter();

  let newHref = href?.toString();
  if (newHref?.startsWith('./')) {
    newHref = `${router.asPath}/${newHref.slice(2)}`;
  }

  if (isDisabled) {
    return <>{children}</>;
  }

  if (nativeAnchor) {
    return <a href={(as || href)?.toString()}>{children}</a>;
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
    // TODO: Fix this
    <NextLink href={newHref as any} as={as} passHref={!justLink}>
      {children}
    </NextLink>
  );
};
