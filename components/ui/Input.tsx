import React from 'react';
import styles from './Input.module.css';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: 'search';
    error?: string;
}

export function Input({ className = '', icon, error, ...props }: InputProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                {icon === 'search' && <Search className={styles.icon} size={18} />}
                <input
                    className={`${styles.input} ${icon ? styles.hasIcon : ''} ${error ? styles.error : ''} ${className}`}
                    {...props}
                />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
}
