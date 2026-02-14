import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './SocialMap.css';

// Fix for default marker icon in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons for friends
const createFriendIcon = (initial) => L.divIcon({
    className: 'custom-friend-icon',
    html: `<div style="
    background-color: #FF7F50;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    font-weight: bold;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  ">${initial}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

const SocialMap = ({ center, friends }) => {
    if (!center) return null;

    return (
        <div className="social-map-container">
            <MapContainer center={[center.lat, center.lng]} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Destination Marker */}
                <Marker position={[center.lat, center.lng]}>
                    <Popup>
                        {center.name} <br /> Your Vibe Destination.
                    </Popup>
                </Marker>

                {/* Friend Markers */}
                {friends && friends.map(friend => (
                    <Marker
                        key={friend.id}
                        position={[friend.lat, friend.lng]}
                        icon={createFriendIcon(friend.name[0])}
                    >
                        <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                            {friend.name}
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default SocialMap;
