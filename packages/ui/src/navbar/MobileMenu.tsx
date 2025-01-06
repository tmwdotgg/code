import { X } from 'lucide-react';
import { Link } from '@remix-run/react';

interface MobileMenuItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    items: MobileMenuItem[];
}

export function MobileMenu({ isOpen, setIsOpen, items }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="relative z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/25" onClick={() => setIsOpen(false)} />
            
            <div className="fixed inset-0 z-50 flex">
                <div className="relative flex w-full max-w-xs flex-col bg-white dark:bg-gray-900 pb-12 pt-5">
                    <div className="flex px-4">
                        <button
                            type="button"
                            className="ml-auto -m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 space-y-2 px-4">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
