import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    卒展ポータル
                </Link>

                <nav className={styles.nav}>
                    <Link href="/exhibitions" className={styles.navLink}>展覧会一覧</Link>
                    <Link href="/calendar" className={styles.navLink}>カレンダー</Link>
                    <Link href="/map" className={styles.navLink}>マップ</Link>
                </nav>

                <div className={styles.actions}>
                    {/* Registration removed as per user request */}
                </div>
            </div>
        </header>
    );
}
