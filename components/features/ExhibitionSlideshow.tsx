'use client';

import { Exhibition } from '@/lib/types';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import styles from './ExhibitionSlideshow.module.css';

interface Props {
    exhibitions: Exhibition[];
}

export default function ExhibitionSlideshow({ exhibitions }: Props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>開催間近の展覧会</h2>
            <div className={styles.scroller}>
                {exhibitions.map((exhibition) => (
                    <Link href={`/exhibitions/${exhibition.id}`} key={exhibition.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={exhibition.imageUrl} alt={exhibition.title} className={styles.image} />
                            <div className={styles.badge}>
                                {exhibition.schoolType === 'University' ? '大学' : '専門'}
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{exhibition.school}</h3>
                            <p className={styles.dept}>{exhibition.department}</p>
                            <div className={styles.meta}>
                                <span className={styles.date}>
                                    {new Date(exhibition.startDate).getMonth() + 1}/{new Date(exhibition.startDate).getDate()} ~
                                </span>
                                <span className={styles.region}>{exhibition.location.region}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                {/* Spacer for right padding */}
                <div style={{ width: '1px', flexShrink: 0 }}></div>
            </div>
        </div>
    );
}
