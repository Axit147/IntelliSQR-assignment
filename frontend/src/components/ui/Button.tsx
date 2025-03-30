import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }
> = ({ children, isLoading, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'w-full border border-[#2B3A67] bg-[#2B3A67] text-[#FCFCFC] rounded-lg px-6 py-4 text-lg cursor-pointer duration-200',
        isLoading || props.disabled
          ? 'opacity-80 cursor-not-allowed'
          : 'hover:opacity-90',
        className // Allow custom styles
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
