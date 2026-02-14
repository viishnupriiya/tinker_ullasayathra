import React from 'react';
import clsx from 'clsx';
import Card from './Card';
import Button from './Button';
import { X } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className="retro-modal-overlay">
            <Card className={clsx('retro-modal', className)}>
                <div className="retro-modal-header">
                    {title && <h2 className="retro-modal-title">{title}</h2>}
                    <Button variant="outline" size="sm" onClick={onClose} className="retro-modal-close">
                        <X size={20} />
                    </Button>
                </div>
                <div className="retro-modal-content">
                    {children}
                </div>
            </Card>
        </div>
    );
};

export default Modal;
