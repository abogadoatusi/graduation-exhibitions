import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>卒展ポータル</h3>
                        <p className={styles.description}>
                            全国の美術大学・専門学校の卒業制作展を探せるポータルサイト
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>探す</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/exhibitions">展覧会一覧</Link></li>
                            <li><Link href="/calendar">カレンダー</Link></li>
                            <li><Link href="/map">マップ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    © 2026 卒展ポータル
                </div>
            </div>
        </footer>
    );
}
