import React from 'react';
import clsx from 'clsx';
import './Input.css';

const Input = ({ label, className, error, ...props }) => {
    return (
        <div className={clsx('retro-input-group', className)}>
            {label && <label className="retro-input-label">{label}</label>}
            <input
                className={clsx('retro-input', { 'retro-input--error': error })}
                {...props}
            />
            {error && <span className="retro-input-error">{error}</span>}
        </div>
    );
};

export default Input;
