
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    children, 
    ...props 
}) => {
    const baseClasses = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-brand',
        secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
        accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
        ghost: 'text-primary dark:text-primary-light hover:bg-primary/10 focus:ring-primary',
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};
