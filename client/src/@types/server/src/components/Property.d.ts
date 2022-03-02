import { FlexProps } from '@chakra-ui/react';
import * as React from 'react';
interface Props extends FlexProps {
    label: string;
    value?: React.ReactNode;
}
export declare const Property: (props: Props) => JSX.Element;
export {};
