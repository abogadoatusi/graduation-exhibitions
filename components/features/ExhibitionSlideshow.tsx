'use client';

import { Exhibition } from '@/lib/types';
import Link from 'next/link';
import styles from './ExhibitionSlideshow.module.css';

interface Props {
    exhibitions: Exhibition[];
}

export default function ExhibitionSlideshow({ exhibitions }: Props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>まもなく開催</h2>
            <div className={styles.scroller}>
                {exhibitions.map((exhibition) => (
                    <Link
                        href={exhibition.officialUrl || '#'}
                        key={exhibition.id}
                        className={styles.card}
                        target={exhibition.officialUrl ? "_blank" : undefined}
                    >
                        {/* Top decorative bar */}
                        <div className={`${styles.decorationBar} ${exhibition.schoolType === 'University' ? styles.uniBar : styles.vocBar}`}>
                            <span className={styles.typeLabel}>{exhibition.schoolType === 'University' ? '大学' : '専門'}</span>
                        </div>

                        <div className={styles.content}>
                            {/* Date Block */}
                            <div className={styles.dateBadge}>
                                <span className={styles.month}>{new Date(exhibition.startDate).getMonth() + 1}月</span>
                                <span className={styles.day}>{new Date(exhibition.startDate).getDate()}日</span>
                                <span className={styles.range}>~</span>
                            </div>

                            {/* Info Block */}
                            <div className={styles.info}>
                                <h3 className={styles.schoolName}>{exhibition.school}</h3>
                                <p className={styles.deptName}>{exhibition.department}</p>
                                <div className={styles.footer}>
                                    <span className={styles.location}>{exhibition.location.name}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                {/* Spacer */}
                <div style={{ width: '1rem', flexShrink: 0 }}></div>
            </div>
        </div>
    );
}
