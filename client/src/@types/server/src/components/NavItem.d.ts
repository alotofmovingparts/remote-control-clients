import * as React from 'react';
interface NavItemProps {
    href?: string;
    active?: boolean;
    label: string;
}
interface DesktopNavItemProps extends NavItemProps {
    icon: React.ReactNode;
}
export declare const NavItem: {
    Desktop: ({ icon, label, active, href, }: DesktopNavItemProps) => JSX.Element;
    Mobile: ({ label, active, href }: NavItemProps) => JSX.Element;
};
export {};
