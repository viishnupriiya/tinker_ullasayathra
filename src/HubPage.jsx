import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Input from './Input';
import AutocompleteInput from './AutocompleteInput';
import Button from './Button';
import Modal from './Modal';
import SocialMap from './SocialMap';
import { MapPin, Users, Navigation } from 'lucide-react';
import { isValidPlace, getPlaceDetails } from './data';
import './HubPage.css';

const HubPage = () => {
    const [showPermissionModal, setShowPermissionModal] = useState(false);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [locations, setLocations] = useState({ from: '', to: '' });
    const [days, setDays] = useState(3);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [nearbyFriends, setNearbyFriends] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPermissionModal(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handlePermission = (granted) => {
        setPermissionGranted(granted);
        setShowPermissionModal(false);
        if (granted && selectedDestination) {
            // Simulate fetching friends near the selected destination
            const friends = [
                { id: 1, name: 'Arjun', lat: selectedDestination.lat + 0.01, lng: selectedDestination.lng + 0.01 },
                { id: 2, name: 'Sarah', lat: selectedDestination.lat - 0.02, lng: selectedDestination.lng - 0.01 },
                { id: 3, name: 'Rahul', lat: selectedDestination.lat + 0.005, lng: selectedDestination.lng - 0.02 },
            ];
            setNearbyFriends(friends);
        }
    };

    const handleDestinationSelect = (place) => {
        setLocations({ ...locations, to: place.name });
        setSelectedDestination(place);
        // If permission already granted, fetch friends
        if (permissionGranted) {
            const friends = [
                { id: 1, name: 'Arjun', lat: place.lat + 0.01, lng: place.lng + 0.01 },
                { id: 2, name: 'Sarah', lat: place.lat - 0.02, lng: place.lng - 0.01 },
                { id: 3, name: 'Rahul', lat: place.lat + 0.005, lng: place.lng - 0.02 },
            ];
            setNearbyFriends(friends);
        }
    };

    const handlePlan = () => {
        if (!isValidPlace(locations.to)) {
            alert("Please select a valid destination from the list (e.g., Kashmir, Kerala, Goa)");
            return;
        }
        // Pass destination data to itinerary
        navigate('/itinerary', { state: { destination: selectedDestination, days: parseInt(days) } });
    };

    return (
        <div className="hub-container">
            <div className={`hub-main ${permissionGranted ? 'hub-main--with-sidebar' : ''}`}>
                <h1 className="hub-title">Where to next?</h1>

                <Card className="hub-card">
                    <div className="hub-inputs">
                        <Input
                            label="From"
                            placeholder="Current Location"
                            value={locations.from}
                            onChange={(e) => setLocations({ ...locations, from: e.target.value })}
                            startIcon={<Navigation size={18} />}
                        />
                        <div className="hub-connector">
                            <div className="hub-line"></div>
                        </div>
                        <AutocompleteInput
                            label="To"
                            placeholder="Dream Destination (Type 'k')"
                            value={locations.to}
                            onChange={(e) => setLocations({ ...locations, to: e.target.value })}
                            onSelect={handleDestinationSelect}
                            startIcon={<MapPin size={18} />}
                        />
                    </div>

                    <div className="hub-options" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Input
                            label="Duration (Days)"
                            type="number"
                            min="1"
                            max="7"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="3"
                        />
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        className="hub-btn"
                        onClick={handlePlan}
                    >
                        Generate Itinerary
                    </Button>
                </Card>

                {selectedDestination && permissionGranted && (
                    <SocialMap center={selectedDestination} friends={nearbyFriends} />
                )}
            </div>

            {permissionGranted && selectedDestination && (
                <aside className="hub-sidebar">
                    <Card className="social-radar">
                        <div className="radar-header">
                            <Users size={20} color="var(--color-sunset-orange)" />
                            <h3>Social Radar</h3>
                        </div>
                        <p className="radar-desc">{nearbyFriends.length} friends near {selectedDestination.name}!</p>
                        <ul className="radar-list">
                            {nearbyFriends.map(friend => (
                                <li key={friend.id} className="radar-item">
                                    <div className="radar-avatar">{friend.name[0]}</div>
                                    <span>{friend.name} is nearby</span>
                                    <button className="radar-nudge">Nudge</button>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </aside>
            )}

            <Modal
                isOpen={showPermissionModal}
                onClose={() => handlePermission(false)}
                title="Enable Location?"
            >
                <div className="permission-content">
                    <p>We need your location to find nearby gems and friends.</p>
                    <div className="permission-actions">
                        <Button variant="outline" onClick={() => handlePermission(false)}>Deny</Button>
                        <Button variant="primary" onClick={() => handlePermission(true)}>Allow Access</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default HubPage;
