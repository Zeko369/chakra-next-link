import {
  LinkProps as ChakraLinkProps,
  ButtonProps as ChakraButtonProps,
  IconButtonProps as ChakraButtonIconProps,
} from '@chakra-ui/core';

export type LinkProps = ChakraLinkProps & {
  nextAs?: string;
  href: string;
};

export interface LinkButtonProps extends ChakraButtonProps {
  href: string;
  nextAs?: string;
}
export interface LinkButtonIconProps extends ChakraButtonIconProps {
  href: string;
  nextAs?: string;
}
