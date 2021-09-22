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
};

type JustLink = { justLink: true };
type ChakraSpecific = {
  justLink?: false;
  noUnderline?: boolean;
};

type Props<T> = BaseProps &
  ((ChakraSpecific & T) | JustLink) & {
    noUnderline?: boolean;
    isDisabled?: boolean;
  };

export type LinkProps = Props<ChakraLinkProps>;
export type LinkButtonProps = ChakraButtonProps & ChakraSpecific & BaseProps;
export type LinkButtonIconProps = ChakraButtonIconProps &
  ChakraSpecific &
  BaseProps;
