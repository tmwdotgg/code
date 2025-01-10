import { Link } from '@remix-run/react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_ITEMS } from './Navbar';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="ui-fixed ui-inset-0 ui-bg-black ui-z-40"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="ui-fixed ui-right-0 ui-top-0 ui-h-full ui-w-64 ui-bg-white ui-z-50 ui-shadow-xl ui-p-4 ui-rounded-l-xl ui-border-l-[1.5px] ui-border-gray-300"
                    >
                        <div className="ui-flex ui-justify-end">
                            <button
                                onClick={onClose}
                                className="ui-p-2 ui-rounded-lg hover:ui-bg-gray-100"
                            >
                                <X size={24}/>
                            </button>
                        </div>
                        <div className="ui-flex ui-flex-col ui-gap-4 ui-mt-8">
                            {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
                                <Link
                                    key={label}
                                    to={to}
                                    onClick={onClose}
                                    className="ui-flex ui-items-center ui-gap-3 ui-p-2 ui-rounded-lg hover:ui-bg-gray-100"
                                >
                                    <Icon size={24} />
                                    <span className="ui-text-lg">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
} 
