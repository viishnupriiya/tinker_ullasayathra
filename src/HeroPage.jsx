import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Card from './Card';
import { Map, Compass, Camera } from 'lucide-react';
import './HeroPage.css';

const HeroPage = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Ullasayathra</h1>
                <p className="hero-subtitle">The Serendipity Travel Engine</p>

                <Card className="hero-card">
                    <div className="hero-icons">
                        <Map size={32} color="var(--color-sunset-orange)" />
                        <Compass size={32} color="var(--color-deep-ocean-blue)" />
                        <Camera size={32} color="var(--color-sunset-orange)" />
                    </div>
                    <p className="hero-text">
                        Rediscover the joy of the unknown. <br />
                        Your next adventure is just a vibe check away.
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => navigate('/auth')}
                        className="hero-cta"
                    >
                        Start Your Journey
                    </Button>
                </Card>
            </div>

            {/* Decorative Elements */}
            <div className="hero-decoration hero-decoration--1"></div>
            <div className="hero-decoration hero-decoration--2"></div>
        </div>
    );
};

export default HeroPage;
