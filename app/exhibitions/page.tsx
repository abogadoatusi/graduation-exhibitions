import Link from 'next/link';
import { Search, Filter, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import styles from './page.module.css';

export default function ExhibitionsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>展覧会一覧</h1>
                <p className={styles.subtitle}>全国の卒業制作展を検索</p>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <Search className={styles.searchIcon} size={20} />
                    <Input
                        type="text"
                        placeholder="学校名やキーワードで検索..."
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>地域</option>
                            <option value="all">全国</option>
                            <option value="Hokkaido">北海道</option>
                            <option value="Tohoku">東北</option>
                            <option value="Kanto">関東</option>
                            <option value="Chubu">中部</option>
                            <option value="Kinki">関西</option>
                            <option value="Kyushu">九州・沖縄</option>
                        </select>
                        <Filter size={16} className={styles.selectIcon} />
                    </div>

                    <div className={styles.selectWrapper}>
                        <select className={styles.select} defaultValue="">
                            <option value="" disabled>学校種別</option>
                            <option value="all">すべて</option>
                            <option value="University">大学</option>
                            <option value="Vocational">専門学校</option>
                        </select>
                        <Filter size={16} className={styles.selectIcon} />
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {MOCK_EXHIBITIONS.map((exhibition) => (
                    <Link key={exhibition.id} href={`/exhibitions/${exhibition.id}`}>
                        <Card hoverable className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={exhibition.imageUrl} alt={exhibition.title} className={styles.image} />
                                <div className={styles.regionBadge}>{exhibition.location.region}</div>
                            </div>
                            <CardHeader>
                                <div className={styles.schoolName}>{exhibition.school}</div>
                                <CardTitle className={styles.cardTitle}>{exhibition.title}</CardTitle>
                                <div className={styles.tags}>
                                    {exhibition.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>#{tag}</span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className={styles.infoRow}>
                                    <MapPin size={16} />
                                    <span>{exhibition.location.name}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className={styles.cardFooter}>
                                    <span className={styles.date}>
                                        <Calendar size={14} />
                                        {new Date(exhibition.startDate).toLocaleDateString('ja-JP')} - {new Date(exhibition.endDate).toLocaleDateString('ja-JP')}
                                    </span>
                                    <Link href={`/exhibitions/${exhibition.id}`}>
                                        <Button size="sm" variant="outline">詳細</Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
