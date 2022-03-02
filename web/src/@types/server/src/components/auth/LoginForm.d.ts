/// <reference types="react" />
import { HTMLChakraProps } from '@chakra-ui/react';
interface Props extends HTMLChakraProps<'a'> {
    csrfToken: string | undefined;
}
export declare const LoginForm: ({ csrfToken, ...props }: Props) => JSX.Element;
export {};
