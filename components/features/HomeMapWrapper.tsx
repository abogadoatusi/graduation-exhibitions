'use client';

import dynamic from 'next/dynamic';
import { Exhibition } from '@/lib/types';

// Dynamically import Map with SSR disabled (Leaflet requires window)
const Map = dynamic(() => import('./Map'), { ssr: false });

interface HomeMapWrapperProps {
    exhibitions: Exhibition[];
}

export default function HomeMapWrapper({ exhibitions }: HomeMapWrapperProps) {
    return <Map exhibitions={exhibitions} />;
}
