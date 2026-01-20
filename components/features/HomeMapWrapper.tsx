'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            backgroundColor: '#f5f5f5',
            color: '#666'
        }}>
            Loading Nationwide Map...
        </div>
    )
});

export default function HomeMapWrapper() {
    return <MapComponent />;
}
