import Link from 'next/link';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import { MapPin } from 'lucide-react';
import styles from './page.module.css';
import HomeMapWrapper from '@/components/features/HomeMapWrapper';
import ExhibitionSlideshow from '@/components/features/ExhibitionSlideshow';

export default function Home() {
  // Sort by date (mocking "upcoming")
  const upcomingExhibitions = [...MOCK_EXHIBITIONS].sort((a, b) =>
    new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  ).slice(0, 10);

  const regions = ['関東', '関西', '中部', '北海道', '九州', '東北'];

  return (
    <div className={styles.container}>
      {/* Slideshow for "Upcoming" */}
      <section className={styles.slideshowSection}>
        <ExhibitionSlideshow exhibitions={upcomingExhibitions} />
      </section>

      {/* Map Section (App-like: compact) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>現在地から探す</h2>
        </div>
        <div className={styles.homeMapWrapper}>
          <HomeMapWrapper />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/map" className={styles.mapLink}>
            <MapPin size={16} /> マップを拡大
          </Link>
        </div>
      </section>

      {/* Quick Regions (Chips style) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>エリアから探す</h2>
        </div>
        <div className={styles.regionGrid}>
          {regions.map((region) => (
            <Link href={`/exhibitions?region=${region}`} key={region} className={styles.regionChip}>
              {region}
            </Link>
          ))}
        </div>
      </section>

      <div style={{ height: '4rem' }}></div>
    </div>
  );
}
