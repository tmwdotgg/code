import { Link } from '@remix-run/react';
import { Home, MessageCircle, Server, ShoppingCart } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from 'react';

function useIsHydrated() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return isHydrated;
}

const NAV_ITEMS = [
    { to: "/about", icon: Home, label: "Home" },
    { to: "/products", icon: Server, label: "Servers" },
    { to: "/contact", icon: ShoppingCart, label: "Shop" },
    { to: "/contact", icon: MessageCircle, label: "Discord" }
];

function ClientOnlyNav() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
        <motion.nav
            initial="hidden"
            animate="show"
            variants={container}
            className="ui-flex ui-items-center ui-justify-between ui-p-8 ui-max-w-7xl ui-mx-auto"
        >
            <motion.div variants={item} className="ui-flex ui-items-center">
                <Link to="/" className="ui-text-2xl ui-font-bold">
                    <img src="https://tmw.gg/logo.png" alt="Logo" className="ui-max-h-12 ui-max-w-56" />
                </Link>
            </motion.div>
            <div className="ui-flex ui-items-center ui-relative">
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            className="ui-absolute ui-bg-gray-100 ui-rounded-lg"
                            layoutId="hover-background"
                            initial={{ 
                                backgroundColor: 'rgba(243,244,246,0)',
                                width: navRefs.current[hoveredIndex]?.offsetWidth || 0,
                                x: navRefs.current[hoveredIndex]?.offsetLeft || 0
                            }}
                            animate={{
                                x: navRefs.current[hoveredIndex]?.offsetLeft || 0,
                                width: navRefs.current[hoveredIndex]?.offsetWidth || 0,
                                backgroundColor: 'rgba(243,244,246,1)', 
                                height: navRefs.current[hoveredIndex]?.offsetHeight || 0,
                                y: navRefs.current[hoveredIndex]?.offsetTop || 0
                            }}
                            exit={{
                                scale: 0.9,
                                opacity: 0,
                                transition: {
                                    duration: 0.2,
                                    ease: 'easeOut'
                                }
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                                backgroundColor: {
                                    duration: 0.2,
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
                        className="ui-relative ui-z-10"
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
        </motion.nav>
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
                <div className="ui-flex ui-items-center ui-relative">
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
            </nav>
        );
    }

    return <ClientOnlyNav />;
}
