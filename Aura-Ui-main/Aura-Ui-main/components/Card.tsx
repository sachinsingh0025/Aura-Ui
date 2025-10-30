
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    const cardClasses = `bg-white dark:bg-neutral-800 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden p-6 border border-neutral-200 dark:border-neutral-700 transition-shadow duration-300 hover:shadow-xl ${className}`;
    
    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};
