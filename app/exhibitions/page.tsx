'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Filter, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import styles from './page.module.css';

function ExhibitionsContent() {
    const searchParams = useSearchParams();
    const initialRegion = searchParams.get('region');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState((initialRegion === 'all' || !initialRegion) ? '' : initialRegion);
    const [selectedType, setSelectedType] = useState('');

    const filteredExhibitions = useMemo(() => {
        return MOCK_EXHIBITIONS.filter((ex) => {
            const matchesSearch = searchTerm === '' ||
                (ex.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ex.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ex.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ex.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));

            const matchesRegion = selectedRegion === 'all' || selectedRegion === '' || ex.location.region === selectedRegion;

            const matchesType = selectedType === 'all' || selectedType === '' || ex.schoolType === selectedType;

            return matchesSearch && matchesRegion && matchesType;
        });
    }, [searchTerm, selectedRegion, selectedType]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>展覧会一覧</h1>
                <p className={styles.subtitle}>全国の卒業制作展を検索</p>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="学校名、学科、タグで検索..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                        >
                            <option value="">地域 (すべて)</option>
                            <option value="Hokkaido">北海道</option>
                            <option value="Tohoku">東北</option>
                            <option value="Kanto">関東</option>
                            <option value="Chubu">中部</option>
                            <option value="Kinki">関西</option>
                            <option value="Chugoku">中国</option>
                            <option value="Shikoku">四国</option>
                            <option value="Kyushu">九州・沖縄</option>
                        </select>
                        <Filter size={16} className={styles.selectIcon} />
                    </div>

                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="">学校種別 (すべて)</option>
                            <option value="University">大学</option>
                            <option value="Vocational">専門学校</option>
                        </select>
                        <Filter size={16} className={styles.selectIcon} />
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {filteredExhibitions.length > 0 ? (
                    filteredExhibitions.map((exhibition) => (
                        <Link
                            key={exhibition.id}
                            href={exhibition.officialUrl || '#'}
                            target={exhibition.officialUrl ? "_blank" : undefined}
                        >
                            <Card hoverable className={styles.card}>
                                <CardHeader>
                                    <div className={styles.headerRow}>
                                        <div className={styles.schoolName}>{exhibition.school}</div>
                                        <div className={`${styles.badge} ${exhibition.schoolType === 'University' ? styles.uniBadge : styles.vocBadge}`}>
                                            {exhibition.schoolType === 'University' ? '大学' : '専門'}
                                        </div>
                                    </div>
                                    <CardTitle className={styles.cardTitle}>{exhibition.department}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.infoRow}>
                                        <MapPin size={16} className={styles.icon} />
                                        <span>{exhibition.location.name}</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <Calendar size={16} className={styles.icon} />
                                        <span>{new Date(exhibition.startDate).toLocaleDateString('ja-JP')} - {new Date(exhibition.endDate).toLocaleDateString('ja-JP')}</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.regionHighlight}>
                                            {exhibition.location.region}
                                        </span>
                                        <Button size="sm" variant="outline">公式サイト <ArrowRight size={14} /></Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem', color: '#888' }}>
                        条件に一致する展覧会が見つかりませんでした。
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ExhibitionsPage() {
    return (
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
            <ExhibitionsContent />
        </Suspense>
    );
}
