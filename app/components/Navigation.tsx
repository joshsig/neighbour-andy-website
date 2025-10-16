'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.scss';

export default function Navigation() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [

        { href: '/music', label: 'Listen' },
        { href: '/watch', label: 'Watch' },
        { href: '/shows', label: 'Shows' },
        { href: '/merch', label: 'Merch' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },

    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
        if (item.isSection) {
            e.preventDefault();
            const element = document.getElementById(item.sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 70; // Account for fixed nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // Close mobile menu when clicking a link
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrolled = scrollTop > 50;
            setIsScrolled(scrolled);

            // Logo visibility logic:
            // - On home page: hide when hero title is visible, show when scrolled past or mobile menu open
            // - On other pages: always visible
            const isHomePage = pathname === '/';
            const heroTitleOutOfView = scrollTop > 400;

            if (isHomePage) {
                setIsLogoVisible(heroTitleOutOfView || isMobileMenuOpen);
            } else {
                setIsLogoVisible(true);
            }

            // Add/remove body class for padding
            if (scrolled) {
                document.body.classList.add('nav-scrolled');
            } else {
                document.body.classList.remove('nav-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('nav-scrolled');
        };
    }, [isMobileMenuOpen, pathname]);

    // Separate effect to handle logo visibility when mobile menu state changes
    useEffect(() => {
        const scrollTop = window.scrollY;
        const heroTitleOutOfView = scrollTop > 400;
        const isHomePage = pathname === '/';

        if (isHomePage) {
            setIsLogoVisible(heroTitleOutOfView || isMobileMenuOpen);
        } else {
            setIsLogoVisible(true);
        }
    }, [isMobileMenuOpen, pathname]);

    // Initial effect to set logo visibility based on current page
    useEffect(() => {
        const isHomePage = pathname === '/';
        if (!isHomePage) {
            setIsLogoVisible(true);
        }
    }, [pathname]);

    // Hide navbar on home page
    const isHomePage = pathname === '/';
    if (isHomePage) {
        return null;
    }

    return (
        <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''} ${isMobileMenuOpen ? 'navigation--mobile-open' : ''}`}>
            <div className="navigation__container">
                <AnimatePresence>
                    {isLogoVisible && (
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                            <Link href="/" className="navigation__logo">
                                <Image
                                    src="/nb-logo.png"
                                    alt="Neighbour Andy"
                                    width={120}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.ul
                            className="navigation__menu navigation__menu--mobile"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={`${item.href}-${item.label}`}
                                    className="navigation__item"
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        delay: 0.1 + (index * 0.08)
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`navigation__link ${pathname === item.href ? 'navigation__link--active' : ''
                                            }`}
                                        onClick={(e) => handleNavClick(e, item)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <ul className="navigation__menu navigation__menu--desktop">
                    {navItems.map((item) => (
                        <li key={`${item.href}-${item.label}`} className="navigation__item">
                            <Link
                                href={item.href}
                                className={`navigation__link ${pathname === item.href ? 'navigation__link--active' : ''
                                    }`}
                                onClick={(e) => handleNavClick(e, item)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <motion.button
                    className="navigation__mobile-toggle"
                    aria-label="Toggle mobile menu"
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.95 }}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                >
                    <motion.span
                        className="navigation__hamburger"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 7 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="navigation__hamburger"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="navigation__hamburger"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -7 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </div>
        </nav>
    );
}
