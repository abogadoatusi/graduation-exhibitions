'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import Link from 'next/link';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix Leaflet's default icon path issues in Next.js
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function MapComponent() {
    const centerLat = 36.2048; // Roughly center of Japan
    const centerLng = 138.2529;

    return (
        <MapContainer
            center={[centerLat, centerLng]}
            zoom={5}
            style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {MOCK_EXHIBITIONS.map((exhibition) => (
                <Marker
                    key={exhibition.id}
                    position={[exhibition.location.lat, exhibition.location.lng]}
                    icon={icon}
                >
                    <Popup className="simple-popup">
                        <div style={{ textAlign: 'center', minWidth: '160px' }}>
                            {exhibition.officialUrl ? (
                                <a
                                    href={exhibition.officialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                >
                                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', fontWeight: 700, color: '#0056da' }}>
                                        {exhibition.school}
                                    </h3>
                                    <p style={{ margin: '0', fontSize: '0.75rem', color: '#666' }}>
                                        {new Date(exhibition.startDate).toLocaleDateString('ja-JP')} ~ {new Date(exhibition.endDate).toLocaleDateString('ja-JP')}
                                    </p>
                                    <div style={{
                                        marginTop: '6px',
                                        fontSize: '0.7rem',
                                        color: '#fff',
                                        backgroundColor: '#0056da',
                                        padding: '2px 6px',
                                        borderRadius: '3px',
                                        display: 'inline-block'
                                    }}>
                                        公式サイトを見る
                                    </div>
                                </a>
                            ) : (
                                <div>
                                    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', fontWeight: 700 }}>
                                        {exhibition.school}
                                    </h3>
                                    <p style={{ margin: '0', fontSize: '0.75rem', color: '#666' }}>
                                        {new Date(exhibition.startDate).toLocaleDateString('ja-JP')} ~ {new Date(exhibition.endDate).toLocaleDateString('ja-JP')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
