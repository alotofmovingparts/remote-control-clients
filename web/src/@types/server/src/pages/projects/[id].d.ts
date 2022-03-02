/// <reference types="react" />
import { GetServerSideProps } from 'next';
export default function Project({ id, channelKey, }: {
    id: number;
    channelKey: string;
}): JSX.Element;
export declare const getServerSideProps: GetServerSideProps;
