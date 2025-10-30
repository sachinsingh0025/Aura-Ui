
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
    const inputClasses = `
        w-full px-4 py-2 
        bg-neutral-100 dark:bg-neutral-700 
        text-neutral-800 dark:text-neutral-200 
        border border-neutral-300 dark:border-neutral-600 
        rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        placeholder-neutral-400 dark:placeholder-neutral-500
        transition-colors duration-200
        ${className}
    `;

    return <input className={inputClasses} {...props} />;
};
