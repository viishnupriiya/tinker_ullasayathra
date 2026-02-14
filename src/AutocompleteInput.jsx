import React, { useState, useEffect, useRef } from 'react';
import Input from './Input';
import Card from './Card';
import { searchPlaces } from './data';
import './AutocompleteInput.css';

const AutocompleteInput = ({ label, value, onChange, placeholder, startIcon, onSelect }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Handle clicks outside to close dropdown
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        onChange(e);

        if (inputValue.length > 0) {
            const results = searchPlaces(inputValue);
            setSuggestions(results);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSelectSuggestion = (place) => {
        onSelect(place);
        setShowSuggestions(false);
    };

    return (
        <div className="autocomplete-wrapper" ref={wrapperRef}>
            <Input
                label={label}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                startIcon={startIcon}
                autoComplete="off"
            />

            {showSuggestions && suggestions.length > 0 && (
                <Card className="suggestions-dropdown">
                    {suggestions.map((place) => (
                        <div
                            key={place.id}
                            className="suggestion-item"
                            onClick={() => handleSelectSuggestion(place)}
                        >
                            <div className="suggestion-name">{place.name}</div>
                            <div className="suggestion-region">{place.region}</div>
                        </div>
                    ))}
                </Card>
            )}
        </div>
    );
};

export default AutocompleteInput;
