import Link from 'next/link';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import { Button } from '@/components/ui/Button';
import { MapPin, Calendar, Globe, ArrowLeft, Share2 } from 'lucide-react';
import styles from './page.module.css';

interface Props {
    params: {
        id: string;
    };
}

export default function ExhibitionDetailPage({ params }: Props) {
    const exhibition = MOCK_EXHIBITIONS.find(e => e.id === params.id);

    if (!exhibition) {
        return (
            <div className={styles.notFound}>
                <h1>Exhibition not found</h1>
                <Link href="/exhibitions">
                    <Button>Back to List</Button>
                </Link>
            </div>
        );
    }

    return (
        <article className={styles.container}>
            <Link href="/exhibitions" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to Exhibitions
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>{exhibition.title}</h1>
                <p className={styles.school}>{exhibition.school} - {exhibition.department}</p>

                <div className={styles.metaWrapper}>
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <Calendar size={20} className={styles.icon} />
                            <div>
                                <span className={styles.metaLabel}>Date</span>
                                <p>{exhibition.startDate} - {exhibition.endDate}</p>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <MapPin size={20} className={styles.icon} />
                            <div>
                                <span className={styles.metaLabel}>Location</span>
                                <p>{exhibition.location.name}</p>
                                <p className={styles.address}>{exhibition.location.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Button variant="outline"><Share2 size={16} /> Share</Button>
                        <Link href={exhibition.officialUrl || '#'} target="_blank">
                            <Button>Official Website <Globe size={16} /></Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.heroImageWrapper}>
                <img src={exhibition.imageUrl} alt={exhibition.title} className={styles.heroImage} />
            </div>

            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>About</h2>
                    <p className={styles.description}>{exhibition.description}</p>
                    <div className={styles.tags}>
                        {exhibition.tags.map(tag => (
                            <span key={tag} className={styles.tag}>#{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2>Access</h2>
                    <div className={styles.mapPlaceholder}>
                        {/* Map placeholder or embed link */}
                        <p>Map View Loading...</p>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exhibition.location.address)}`}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mapLink}
                        >
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
