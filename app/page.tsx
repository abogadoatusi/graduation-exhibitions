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
      <main className={styles.main}>
        {/* Horizontal Slideshow for Upcoming Exhibitions */}
        <ExhibitionSlideshow exhibitions={upcomingExhibitions} />

        <div className={styles.mapSection}>
          <h2 className={styles.sectionTitle}>
            <MapPin className={styles.titleIcon} size={24} />
            現在地から探す
          </h2>
          <div className={styles.mapWrapper}>
            <HomeMapWrapper />
          </div>
        </div>

        <div className={styles.regionSection}>
          <h2 className={styles.sectionTitle}>エリアから探す</h2>
          <div className={styles.regionGrid}>
            {regions.map((region) => (
              <Link href={`/exhibitions?region=${region.id}`} key={region.id} className={styles.regionChip}>
                {region.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
      );
}
      ```
