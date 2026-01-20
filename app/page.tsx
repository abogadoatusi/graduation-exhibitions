import Link from 'next/link';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import HomeMapWrapper from '@/components/features/HomeMapWrapper';

export default function Home() {
  const featuredExhibitions = MOCK_EXHIBITIONS.slice(0, 3);
  const regions = ['Kanto', 'Kinki', 'Hokkaido', 'Kyushu'];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Art & Design <br />
            <span className={styles.highlight}>Graduation Portal</span>
          </h1>
          <p className={styles.heroText}>
            Explore graduation works from across Japan.
          </p>
          <div className={styles.heroActions}>
            <Link href="/exhibitions">
              <Button size="lg">Find Exhibitions</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portal Quick Links */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Browse by Region</h2>
        <div className={styles.categoryGrid}>
          {regions.map(region => (
            <Link key={region} href={`/exhibitions?region=${region}`} className={styles.categoryCard}>
              {region}
            </Link>
          ))}
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-bg-sub)' }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Map View</h2>
          <p className={styles.sectionDesc}>Find exhibitions near you</p>
        </div>
        <div className={styles.homeMapWrapper}>
          <HomeMapWrapper />
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/map">
            <Button variant="outline">View Fullscreen Map</Button>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Exhibitions</h2>
          <Link href="/exhibitions" className={styles.viewAll}>View All →</Link>
        </div>

        <div className={styles.grid}>
          {featuredExhibitions.map((exhibition) => (
            <Link key={exhibition.id} href={`/exhibitions/${exhibition.id}`}>
              <Card hoverable className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={exhibition.imageUrl} alt={exhibition.title} className={styles.image} />
                  <div className={styles.regionBadge}>{exhibition.location.region}</div>
                </div>
                <CardHeader>
                  <CardTitle className={styles.cardTitle}>{exhibition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={styles.infoRow}>
                    <MapPin size={16} />
                    <span>{exhibition.location.name}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <Calendar size={16} />
                    <span>{exhibition.startDate} - {exhibition.endDate}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
