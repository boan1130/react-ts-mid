import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', type = 'text', label, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5">
                {label && <label className="text-sm font-medium">{label}</label>}
                <input
                    type={type}
                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';