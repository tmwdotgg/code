import { Link } from '@remix-run/react';
import { Home, Menu, MessageCircle, Server, ShoppingCart } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from 'react';
import { MobileMenu } from './MobileMenu';

function useIsHydrated() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return isHydrated;
}

interface NavItem {
    to: string;
    icon: React.ComponentType<{ size?: number | string }>;
    label: string;
}

export const NAV_ITEMS: NavItem[] = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/servers", icon: Server, label: "Servers" },
    { to: "/shop", icon: ShoppingCart, label: "Shop" },
    { to: "/discord", icon: MessageCircle, label: "Discord" }
];

function ClientOnlyNav() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRefs = useRef<(HTMLDivElement | null)[]>([]);

    const container = {
        hidden: { opacity: 0, y: -10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.08
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: -15 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="show"
                variants={container}
                className="ui-flex ui-items-center ui-justify-between ui-p-8 ui-max-w-7xl ui-mx-auto ui-relative ui-z-50"
            >
                <motion.div variants={item} className="ui-flex ui-items-center">
                    <Link to="/" className="ui-text-2xl ui-font-bold">
                        <img src="https://tmw.gg/logo.png" alt="Logo" className="ui-max-h-12 ui-max-w-56" />
                    </Link>
                </motion.div>
                
                {/* Desktop Navigation */}
                <div className="ui-hidden md:ui-flex ui-items-center ui-relative">
                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                className="ui-absolute ui-rounded-lg ui-backdrop-blur-[2px] ui-border-2 ui-border-gray-800/30"
                                layoutId="hover-background"
                                initial={{ 
                                    backgroundColor: 'rgba(25,25,25,0)',
                                    className: 'ui-border-gray-800/0',
                                    width: navRefs.current[hoveredIndex]?.offsetWidth || 0,
                                    x: navRefs.current[hoveredIndex]?.offsetLeft || 0,
                                    opacity: 0
                                }}
                                animate={{
                                    x: navRefs.current[hoveredIndex]?.offsetLeft || 0,
                                    width: navRefs.current[hoveredIndex]?.offsetWidth || 0,
                                    backgroundColor: 'rgba(25,25,25,0.5)', 
                                    className: 'ui-border-gray-800/90',
                                    height: navRefs.current[hoveredIndex]?.offsetHeight || 0,
                                    y: navRefs.current[hoveredIndex]?.offsetTop || 0,
                                    opacity: 1,
                                    scale: 1
                                }}
                                exit={{
                                    scale: 0.98,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.15,
                                        ease: 'easeInOut'
                                    }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                    opacity: {
                                        duration: 0.15,
                                        ease: 'easeInOut'
                                    },
                                    scale: {
                                        duration: 0.15,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                        )}
                    </AnimatePresence>
                    {NAV_ITEMS.map(({ to, icon: Icon, label }, index) => (
                        <motion.div
                            key={label}
                            variants={item}
                            ref={(el: HTMLDivElement | null) => navRefs.current[index] = el}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="ui-relative ui-z-10 ui-text-white ui-font-medium"
                        >
                            <Link
                                to={to}
                                className="ui-flex ui-items-center ui-gap-3 ui-text-lg ui-px-4 ui-py-2"
                            >
                                <Icon size={24} />
                                <span>{label}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    variants={item}
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:ui-hidden ui-p-2 ui-rounded-lg transition-all duration-200 ease-in-out hover:ui-bg-[#252525] hover:ui-opacity-20"
                >
                    <Menu size={24} className='ui-text-white' />
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
            />
        </>
    );
}

export function Navbar() {
    const isHydrated = useIsHydrated();

    if (!isHydrated) {
        return (
            <nav className="ui-flex ui-items-center ui-justify-between ui-p-8 ui-max-w-7xl ui-mx-auto">
                <div className="ui-flex ui-items-center">
                    <Link to="/" className="ui-text-2xl ui-font-bold">
                        <img src="https://tmw.gg/logo.png" alt="Logo" className="ui-max-h-12 ui-max-w-56" />
                    </Link>
                </div>
                <div className="ui-hidden md:ui-flex ui-items-center ui-relative">
                    {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
                        <div key={label} className="ui-relative ui-z-10">
                            <Link
                                to={to}
                                className="ui-flex ui-items-center ui-gap-3 ui-text-lg ui-px-4 ui-py-2"
                            >
                                <Icon size={24} />
                                <span>{label}</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <button className="md:ui-hidden ui-p-2 ui-rounded-lg hover:ui-bg-gray-100">
                    <Menu size={24} />
                </button>
            </nav>
        );
    }

    return <ClientOnlyNav />;
}
