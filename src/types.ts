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
};

export type LinkProps = ChakraLinkProps & BaseProps;
export type LinkButtonProps = ChakraButtonProps & BaseProps;
export type LinkButtonIconProps = ChakraButtonIconProps & BaseProps;
