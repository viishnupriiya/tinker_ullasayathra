import React from 'react';
import VibeCheckForm from './VibeCheckForm';
import './VibeCheckPage.css';

const VibeCheckPage = () => {
    return (
        <div className="vibe-check-container">
            <div className="vibe-header">
                <h1 className="vibe-title">The Vibe Check</h1>
                <p className="vibe-subtitle">Tell us who you are, not just where you're going.</p>
            </div>
            <VibeCheckForm />
        </div>
    );
};

export default VibeCheckPage;
