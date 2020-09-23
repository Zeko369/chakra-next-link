import React from 'react';
import NextLink from 'next/link';

export const external = (href: string) => href.startsWith('http');
export const LinkingComponent: React.FC<{ as?: string; href: string }> = ({
  as,
  href,
  children,
}) => {
  if (!as && external(href)) {
    return <>{children}</>;
  }

  return (
    <NextLink href={href} passHref as={as}>
      {children}
    </NextLink>
  );
};
