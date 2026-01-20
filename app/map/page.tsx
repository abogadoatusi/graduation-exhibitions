'use client';

import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Dynamically import the Map component to avoid SSR issues with Leaflet/window
const MapComponent = dynamic(() => import('@/components/features/Map'), {
    ssr: false,
    loading: () => <div className={styles.loading}>Loading Map...</div>
});

export default function MapPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Exhibition Map</h1>
            <p className={styles.pageDesc}>Explore exhibitions across Japan.</p>

            <div className={styles.mapWrapper}>
                <MapComponent />
            </div>
        </div>
    );
}
