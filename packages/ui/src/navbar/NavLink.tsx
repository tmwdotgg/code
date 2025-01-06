import { NavLink as RemixNavLink } from '@remix-run/react';
import type { ReactNode } from 'react';

interface NavLinkProps {
    to: string;
    children: ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
    return (
        <RemixNavLink
            to={to}
            className={({ isActive }: { isActive: boolean }) =>
                `px-3 py-2 text-sm font-medium transition-colors ${isActive
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
                }`
            }
        >
            {children}
        </RemixNavLink>
    );
}
