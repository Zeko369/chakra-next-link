import { ReactNode } from 'react';
import {
  ButtonProps as ChakraButtonProps,
  IconButtonProps as ChakraButtonIconProps,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';

export type BaseProps = {
  linkProps?: NextLinkProps;
  href?: string;
  nextAs?: string;
  isExternal?: boolean;
  nativeAnchor?: boolean;

  children: ReactNode;
};

type ChakraSpecific = {
  justLink?: false;
  noUnderline?: boolean;
};

type AddOr<Children, Cond, Or> = Cond extends true ? Or | Children : Children;
type Props<T, HasJustLink = false> = BaseProps &
  AddOr<T & ChakraSpecific, HasJustLink, { justLink: true }> & {
    noUnderline?: boolean;
    isDisabled?: boolean;
  };

export type LinkProps = Props<ChakraLinkProps, true>;
export type ActiveLinkProps = Props<ChakraLinkProps>;
export type LinkButtonProps = Props<ChakraButtonProps>;
export type LinkButtonIconProps = Props<ChakraButtonIconProps> & {
  children?: ReactNode;
};
