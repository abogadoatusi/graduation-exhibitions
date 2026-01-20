import Link from 'next/link';
import styles from './Footer.module.css';
import { Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>GradEx 2026</h3>
                        <p className={styles.desc}>
                            Discover graduation exhibitions from art universities and vocational schools across Japan.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Menu</h4>
                        <ul>
                            <li><Link href="/exhibitions">Exhibitions</Link></li>
                            <li><Link href="/calendar">Calendar</Link></li>
                            <li><Link href="/map">Map</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div></div>

                    <div className={styles.social}>
                        <h4>Follow Us</h4>
                        <div className={styles.icons}>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} 卒展ポータル All rights reserved.</p>
                    <p className={styles.subtext}>全国の美術大学・芸術大学・専門学校の卒業制作展情報サイト</p>
                </div>
            </div>
        </footer>
    );
}
