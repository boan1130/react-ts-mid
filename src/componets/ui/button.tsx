import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'destructive' | 'outline';
    size?: 'default' | 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none';
        const variants = {
            default: 'bg-blue-500 text-white hover:bg-blue-600',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            outline: 'border border-gray-300 bg-white hover:bg-gray-100'
        };
        const sizes = {
            default: 'h-10 py-2 px-4',
            sm: 'h-8 px-3 text-sm',
            lg: 'h-12 px-8'
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        return <button className={classes} ref={ref} {...props} />;
    }
);

Button.displayName = 'Button';