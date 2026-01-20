import Link from 'next/link';
import { MapPin } from 'lucide-react';
import ExhibitionSlideshow from '@/components/features/ExhibitionSlideshow';
import HomeMapWrapper from '@/components/features/HomeMapWrapper';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import styles from './page.module.css';

export default function Home() {
  const regions = [
    { name: '関東', id: 'Kanto' },
    { name: '関西', id: 'Kinki' },
    { name: '中部', id: 'Chubu' },
    { name: '北海道', id: 'Hokkaido' },
    { name: '九州・沖縄', id: 'Kyushu' },
    { name: '東北', id: 'Tohoku' },
  ];

  // Sort by start date for "Upcoming"
  const upcomingExhibitions = MOCK_EXHIBITIONS
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 10);

  return (
    <main className={styles.container}>
      {/* Horizontal Slideshow for Upcoming Exhibitions */}
      <ExhibitionSlideshow exhibitions={upcomingExhibitions} />

      <div className={styles.section} style={{ marginTop: '2rem' }}>
        <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={24} className={styles.titleIcon} />
          現在地から探す
        </h2>
        {/* Ensure Map has height */}
        <div className={styles.homeMapWrapper} style={{ height: '350px', width: '100%', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <HomeMapWrapper exhibitions={MOCK_EXHIBITIONS} />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/map" className={styles.mapLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#0056da', textDecoration: 'none', fontWeight: 'bold' }}>
            <MapPin size={16} /> マップを拡大
          </Link>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>エリアから探す</h2>
        <div className={styles.regionGrid}>
          {regions.map((region) => (
            <Link href={`/exhibitions?region=${region.id}`} key={region.id} className={styles.regionChip}>
              {region.name}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ height: '4rem' }}></div>
    </main>
  );
}
