import {
  LinkProps as ChakraLinkProps,
  ButtonProps as ChakraButtonProps,
  IconButtonProps as ChakraButtonIconProps,
} from '@chakra-ui/core';

export type LinkProps = Omit<ChakraLinkProps, 'as'> & {
  as?: string;
  href: string;
};

export interface LinkButtonProps extends Omit<ChakraButtonProps, 'as'> {
  href: string;
  as?: string;
}
export interface LinkButtonIconProps extends Omit<ChakraButtonIconProps, 'as'> {
  href: string;
  as?: string;
}
