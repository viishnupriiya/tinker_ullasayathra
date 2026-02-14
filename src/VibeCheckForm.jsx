import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './VibeCheckForm.css';

const STEPS = [
    {
        id: 'budget',
        question: "What's the budget vibe?",
        options: [
            { value: 'backpacker', label: 'Backpacker', desc: 'Shoestring budget, maximum adventure.' },
            { value: 'mid-range', label: 'Mid-range', desc: 'Comfortable but sensible.' },
            { value: 'luxury', label: 'Luxury', desc: 'Treat yourself, money is no object.' },
        ]
    },
    {
        id: 'geography',
        question: "Mist-covered Mountains or Salt-water Seas?",
        options: [
            { value: 'mountains', label: 'Mountains', desc: 'Cool air, winding roads, pine trees.' },
            { value: 'sea', label: 'Seas', desc: 'Sun, sand, waves, and seafood.' },
        ]
    },
    {
        id: 'group',
        question: "Who's coming along?",
        options: [
            { value: 'solo', label: 'Solo', desc: 'Just me and the world.' },
            { value: 'duo', label: 'Duo', desc: 'Me and my favorite person.' },
            { value: 'squad', label: 'The Squad', desc: 'The whole chaotic gang.' },
        ]
    },
    {
        id: 'foodie',
        question: "Foodie Profile?",
        options: [
            { value: 'street', label: 'Street Food', desc: 'Eating standing up on a sidewalk.' },
            { value: 'fine', label: 'Fine Dining', desc: 'White tablecloths and tiny portions.' },
            { value: 'home', label: 'Home-cooked', desc: 'Authentic local family recipes.' },
        ]
    },
    {
        id: 'pace',
        question: "How fast are we moving?",
        options: [
            { value: 'chill', label: 'Zen Mode', desc: '1-2 spots, lots of naps.' },
            { value: 'hustler', label: 'The Hustler', desc: '5+ spots, sleep is for the weak.' },
            { value: 'balanced', label: 'Balanced', desc: 'A bit of both.' },
        ]
    },
    {
        id: 'aesthetic',
        question: "What's the visual vibe?",
        options: [
            { value: 'insta', label: 'Instagrammable', desc: 'Famous views and pretty cafes.' },
            { value: 'raw', label: 'Raw & Authentic', desc: 'Crowded markets and real life.' },
            { value: 'vintage', label: '90s Vintage', desc: 'Grainy film vibes and old theaters.' },
        ]
    },
    {
        id: 'social',
        question: "Social Comfort Zone?",
        options: [
            { value: 'introvert', label: 'Introvert Bubble', desc: 'Quiet spots, avoid eye contact.' },
            { value: 'butterfly', label: 'Social Butterfly', desc: 'Hostels and meeting new people.' },
            { value: 'local', label: 'Local Immersion', desc: 'Staying with families.' },
        ]
    },
    {
        id: 'adventure',
        question: "Adrenaline Level?",
        options: [
            { value: 'safe', label: 'Safe & Sound', desc: 'Museums and parks.' },
            { value: 'explorer', label: 'Spontaneous', desc: 'Off-beat trails.' },
            { value: 'thrill', label: 'Thrill Seeker', desc: 'Bungee jumping and night treks.' },
        ]
    }
];

const VibeCheckForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleOptionSelect = (value) => {
        setAnswers({ ...answers, [STEPS[currentStep].id]: value });
    };

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Submit form
            console.log('Final Answers:', answers);
            navigate('/hub');
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const stepData = STEPS[currentStep];
    const selectedValue = answers[stepData.id];

    return (
        <Card className="vibe-card">
            <div className="vibe-progress">
                <div
                    className="vibe-progress-bar"
                    style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                />
            </div>

            <div className="vibe-step-content">
                <h3 className="vibe-question">{stepData.question}</h3>

                <div className="vibe-options">
                    {stepData.options.map((option) => (
                        <button
                            key={option.value}
                            className={`vibe-option ${selectedValue === option.value ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option.value)}
                        >
                            <span className="vibe-option-label">{option.label}</span>
                            <span className="vibe-option-desc">{option.desc}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="vibe-actions">
                <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                >
                    <ChevronLeft size={20} /> Back
                </Button>
                <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={!selectedValue}
                >
                    {currentStep === STEPS.length - 1 ? 'Finish' : 'Next'} <ChevronRight size={20} />
                </Button>
            </div>
        </Card>
    );
};

export default VibeCheckForm;
