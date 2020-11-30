import {
  LinkProps as ChakraLinkProps,
  ButtonProps as ChakraButtonProps,
  IconButtonProps as ChakraButtonIconProps
} from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';

export type BaseProps = {
  linkProps?: NextLinkProps;
  href?: string;
  nextAs?: string;
  isExternal?: boolean;
};

type JustLink = { justLink: true };
type ChakraSpecific = {
  isDisabled?: boolean;
  justLink?: false;
};

type Props<T> = BaseProps & ((ChakraSpecific & T) | JustLink);

export type LinkProps = Props<ChakraLinkProps>;
export type LinkButtonProps = ChakraButtonProps & ChakraSpecific & BaseProps;
export type LinkButtonIconProps = ChakraButtonIconProps &
  ChakraSpecific &
  BaseProps;
