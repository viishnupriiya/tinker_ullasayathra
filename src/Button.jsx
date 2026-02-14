import React from 'react';
import clsx from 'clsx';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                'retro-btn',
                `retro-btn--${variant}`,
                `retro-btn--${size}`,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
