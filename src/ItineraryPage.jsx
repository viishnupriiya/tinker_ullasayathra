import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import Button from './Button';
import { Calendar, Lock, Unlock, EyeOff, Map } from 'lucide-react';
import { generateItinerary } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import './ItineraryPage.css';

const NormalItinerary = ({ plan }) => (
    <motion.div
        className="itinerary-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {plan.map((day, i) => (
            <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
            >
                <Card className="itinerary-day">
                    <h3>Day {day.day}</h3>
                    <ul className="day-schedule">
                        {day.activities.map((item, index) => (
                            <li key={index}>{item.time} - {item.activity}</li>
                        ))}
                    </ul>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

const MysteryItinerary = ({ plan }) => {
    const [unlockedDays, setUnlockedDays] = useState(1);

    const handleCheckIn = () => {
        if (unlockedDays < plan.length) {
            setUnlockedDays(unlockedDays + 1);
        }
    };

    return (
        <div className="itinerary-list">
            {plan.map((day, i) => {
                const isLocked = day.day > unlockedDays;
                return (
                    <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className={`itinerary-day ${isLocked ? 'day-locked' : ''} ${!isLocked ? 'day-unlocked' : ''}`}>
                            <div className="day-header">
                                <h3>Day {day.day}</h3>
                                {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
                            </div>

                            <AnimatePresence mode="wait">
                                {isLocked ? (
                                    <motion.div
                                        key="locked"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="locked-content"
                                    >
                                        <p>Locked until Day {day.day - 1} is complete.</p>
                                        <EyeOff size={32} style={{ opacity: 0.5, marginTop: '1rem' }} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="unlocked"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.5 }}
                                        className="day-content"
                                    >
                                        <ul className="day-schedule">
                                            {day.activities.map((item, index) => (
                                                <li key={index}>{item.time} - {item.activity}</li>
                                            ))}
                                        </ul>
                                        {day.day === unlockedDays && day.day < plan.length && (
                                            <Button className="check-in-btn" onClick={handleCheckIn}>
                                                Check In to Unlock Day {day.day + 1}
                                            </Button>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
};

const ItineraryPage = () => {
    const [mode, setMode] = useState(null); // 'normal' or 'mystery'
    const location = useLocation();
    const destination = location.state?.destination;
    const days = location.state?.days || 3;
    const [itinerary, setItinerary] = useState([]);

    useEffect(() => {
        if (destination) {
            // Use tags from destination if available, otherwise mock
            const vibeTags = destination.tags || ['adventure'];
            const generatedPlan = generateItinerary(destination.id, destination.name, vibeTags, days);
            setItinerary(generatedPlan);
        }
    }, [destination, days]);

    if (!destination) {
        return (
            <div className="itinerary-container">
                <h1>No Destination Selected</h1>
                <p>Please go back to the hub and select a destination.</p>
                <Button onClick={() => window.history.back()}>Go Back</Button>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    if (!mode) {
        return (
            <div className="itinerary-selection-container" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.8)), url(${destination.image})`, backgroundSize: 'cover' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="selection-title"
                >
                    Choose Your Path to {destination.name}
                </motion.h1>

                <div className="selection-cards">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card className="selection-card" onClick={() => setMode('normal')}>
                            <div className="selection-icon"><Calendar size={48} /></div>
                            <h2>The Planner</h2>
                            <p>A comprehensive, beautifully laid out multi-day itinerary. No surprises.</p>
                            <Button variant="outline">Select Normal Plan</Button>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card className="selection-card mystery-card" onClick={() => setMode('mystery')}>
                            <div className="selection-icon"><EyeOff size={48} /></div>
                            <h2>The Ottamind</h2>
                            <p>Surprise Mode. Only Day 1 is visible. Unlock the rest as you go.</p>
                            <Button variant="primary">Select Mystery Plan</Button>
                        </Card>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="itinerary-container">
            <div className="itinerary-header">
                <Button variant="outline" size="sm" onClick={() => setMode(null)}>Change Mode</Button>
                <h1>{mode === 'normal' ? `Your Journey: ${destination.name}` : `The Mystery Path: ${destination.name}`}</h1>
            </div>

            {/* Destination Image Banner */}
            <motion.div
                className="destination-banner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 300 }}
                style={{ backgroundImage: `url(${destination.image})` }}
            >
                <div className="banner-overlay">
                    <h2>{destination.name}</h2>
                    <p>{destination.region}</p>
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {mode === 'normal' ?
                    <NormalItinerary key="normal" plan={itinerary} /> :
                    <MysteryItinerary key="mystery" plan={itinerary} />
                }
            </AnimatePresence>
        </div>
    );
};

export default ItineraryPage;
