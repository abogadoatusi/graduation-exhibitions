'use client';

import React, { useState } from 'react';
import { MOCK_EXHIBITIONS } from '@/lib/mock-data';
import { Exhibition } from '@/lib/types';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import styles from './page.module.css';

export default function CalendarPage() {
    // Default to Feb 2026 for demo purposes as that's when most grad shows are
    const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Month is 0-indexed, 1 = Feb

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const getExhibitionsForDate = (day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return MOCK_EXHIBITIONS.filter(ex => {
            return dateStr >= ex.startDate && dateStr <= ex.endDate;
        });
    };

    const renderCalendarDays = () => {
        const days = [];

        // Empty cells for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
        }

        // Days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const exhibitions = getExhibitionsForDate(day);

            days.push(
                <div key={day} className={styles.dayCell}>
                    <span className={styles.dayNumber}>{day}</span>
                    <div className={styles.eventList}>
                        {exhibitions.map(ex => (
                            <Link
                                key={ex.id}
                                href={ex.officialUrl || '#'}
                                target={ex.officialUrl ? "_blank" : undefined}
                                className={styles.eventDot}
                            >
                                <span className={styles.eventTitle}>{ex.school}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        return days;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.pageTitle}>展覧会カレンダー</h1>
                <div className={styles.controls}>
                    <button onClick={prevMonth} className={styles.navButton}><ChevronLeft /></button>
                    <h2 className={styles.currentDate}>
                        {currentDate.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })}
                    </h2>
                    <button onClick={nextMonth} className={styles.navButton}><ChevronRight /></button>
                </div>
            </div>

            <div className={styles.calendar}>
                <div className={styles.weekdays}>
                    <div>日</div><div>月</div><div>火</div><div>水</div><div>木</div><div>金</div><div>土</div>
                </div>
                <div className={styles.daysGrid}>
                    {renderCalendarDays()}
                </div>
            </div>
        </div>
    );
}
