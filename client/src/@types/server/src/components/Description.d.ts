/// <reference types="react" />
import { StackProps } from '@chakra-ui/react';
interface DescriptionProps extends StackProps {
    title: string;
    children: React.ReactNode;
}
export declare const Description: (props: DescriptionProps) => JSX.Element;
export {};
