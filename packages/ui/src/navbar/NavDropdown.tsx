import { Fragment, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from '@remix-run/react';

interface DropdownItem {
    label: string;
    href: string;
    description?: string;
}

interface NavDropdownProps {
    label: string;
    items: DropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
                {label}
                {isOpen ? (
                    <ChevronUp className="ml-1 h-4 w-4" aria-hidden="true" />
                ) : (
                    <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                )}
            </button>

            {isOpen && (
                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="font-medium">{item.label}</div>
                                {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
