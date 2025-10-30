
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';

const App: React.FC = () => {
    type Theme = 'light' | 'dark';
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 min-h-screen font-sans transition-colors duration-300">
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-primary-light mb-4">
                        Aura UI Style Guide
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        A showcase of our brand's design system, built with a customized Tailwind CSS theme for consistency, beauty, and rapid development.
                    </p>
                </header>

                {/* Colors Section */}
                <section id="colors" className="mb-16">
                    <h2 className="text-3xl font-display font-semibold mb-8 border-b-2 border-primary/20 pb-2">Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-primary mb-2 shadow-md"></div>
                            <h3 className="font-semibold">Primary</h3>
                            <p className="text-sm text-neutral-500">#4F46E5</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-secondary mb-2 shadow-md"></div>
                            <h3 className="font-semibold">Secondary</h3>
                            <p className="text-sm text-neutral-500">#10B981</p>
                        </div>
                         <div className="text-center">
                            <div className="w-full h-24 rounded-lg bg-accent mb-2 shadow-md"></div>
                            <h3 className="font-semibold">Accent</h3>
                            <p className="text-sm text-neutral-500">#F59E0B</p>
                        </div>
                        <div className="text-center col-span-2 md:col-span-3 lg:col-span-2 grid grid-cols-2 gap-2">
                             <div>
                                <div className="w-full h-24 rounded-lg bg-neutral-800 dark:bg-neutral-200 mb-2 shadow-md"></div>
                                <h3 className="font-semibold">Text</h3>
                            </div>
                             <div>
                                <div className="w-full h-24 rounded-lg bg-neutral-100 dark:bg-neutral-800 mb-2 shadow-md border border-neutral-200 dark:border-neutral-700"></div>
                                <h3 className="font-semibold">Background</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography Section */}
                <section id="typography" className="mb-16">
                    <h2 className="text-3xl font-display font-semibold mb-8 border-b-2 border-primary/20 pb-2">Typography</h2>
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-neutral-500 mb-1">Display Font (Lexend)</p>
                            <h1 className="font-display text-5xl font-bold">Display H1</h1>
                        </div>
                        <div>
                            <h2 className="font-display text-4xl font-semibold">Display H2</h2>
                        </div>
                        <div>
                            <h3 className="font-display text-3xl">Display H3</h3>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 mb-2 mt-8">Body Font (Inter)</p>
                            <p className="text-lg">This is a body paragraph. It uses the Inter font, which is chosen for its excellent readability at various sizes. It provides a clean and modern look for all content.</p>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                        </div>
                    </div>
                </section>

                {/* Components Section */}
                <section id="components" className="mb-16">
                    <h2 className="text-3xl font-display font-semibold mb-8 border-b-2 border-primary/20 pb-2">Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        {/* Buttons */}
                        <div className="space-y-6">
                           <h3 className="text-xl font-display font-medium">Buttons</h3>
                           <div className="flex flex-wrap items-center gap-4">
                               <Button variant="primary">Primary</Button>
                               <Button variant="secondary">Secondary</Button>
                               <Button variant="accent">Accent</Button>
                               <Button variant="outline">Outline</Button>
                               <Button variant="ghost">Ghost</Button>
                           </div>
                           <div className="flex flex-wrap items-center gap-4">
                               <Button variant="primary" size="sm">Small</Button>
                               <Button variant="primary" size="md">Medium</Button>
                               <Button variant="primary" size="lg">Large</Button>
                           </div>
                           <div className="flex flex-wrap items-center gap-4">
                               <Button variant="primary" disabled>Disabled</Button>
                               <Button variant="secondary" disabled>Disabled</Button>
                           </div>
                        </div>

                        {/* Cards */}
                         <div className="space-y-6">
                           <h3 className="text-xl font-display font-medium">Cards</h3>
                            <Card>
                                <h4 className="text-lg font-display font-semibold text-primary dark:text-primary-light">Standard Card</h4>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-400">This is a standard card component. It's perfect for containing pieces of related information.</p>
                                <div className="mt-4 text-right">
                                    <Button size="sm" variant="secondary">Learn More</Button>
                                </div>
                            </Card>
                        </div>
                        
                        {/* Forms */}
                        <div className="space-y-6 md:col-span-2">
                           <h3 className="text-xl font-display font-medium">Form Elements</h3>
                           <Card>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
                                        <Input id="name" type="text" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
                                        <Input id="email" type="email" placeholder="you@example.com" />
                                    </div>
                                     <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Password</label>
                                        <Input id="password" type="password" placeholder="••••••••" />
                                    </div>
                                    <div className="pt-2 flex justify-end space-x-3">
                                        <Button type="button" variant="outline">Cancel</Button>
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </form>
                           </Card>
                        </div>

                    </div>
                </section>

            </main>

             <footer className="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-neutral-500 dark:text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} Aura UI. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
