import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', children, label, options, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5">
                {label && <label className="text-sm font-medium">{label}</label>}
                <select
                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                    ref={ref}
                    {...props}
                >
                    {options ? options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    )) : children}
                </select>
            </div>
        );
    }
);

Select.displayName = 'Select';