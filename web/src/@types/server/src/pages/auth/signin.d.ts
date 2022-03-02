/// <reference types="react" />
import type { GetServerSideProps } from 'next';
export default function SignIn({ csrfToken, }: {
    csrfToken: string | undefined;
}): JSX.Element;
export declare const getServerSideProps: GetServerSideProps;
