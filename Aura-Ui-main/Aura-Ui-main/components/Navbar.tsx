
import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Colors', href: '#colors' },
        { name: 'Typography', href: '#typography' },
        { name: 'Components', href: '#components' },
    ];

    return (
        <nav className="sticky top-0 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-md z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.92M9 21a6 6 0 01-6-6v-1a6 6 0 016-6h6a6 6 0 016 6v1a6 6 0 01-6 6" />
                            </svg>
                            <span className="text-xl font-display font-bold text-neutral-800 dark:text-neutral-100">Aura UI</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-neutral-600 dark:text-neutral-300 hover:bg-primary/10 dark:hover:bg-primary-light/10 hover:text-primary dark:hover:text-primary-light px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <div className="ml-4 -mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-neutral-200 dark:bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 dark:focus:ring-offset-neutral-900 focus:ring-primary"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <XIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-neutral-600 dark:text-neutral-300 hover:bg-primary/10 dark:hover:bg-primary-light/10 hover:text-primary dark:hover:text-primary-light block px-3 py-2 rounded-md text-base font-medium transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
