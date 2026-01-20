import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false, ...props }: CardProps) {
    return (
        <div
            className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`${styles.header} ${className}`} {...props}>{children}</div>;
}

export function CardTitle({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={`${styles.title} ${className}`} {...props}>{children}</h3>;
}

export function CardDescription({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={`${styles.description} ${className}`} {...props}>{children}</p>;
}

export function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`${styles.content} ${className}`} {...props}>{children}</div>;
}

export function CardFooter({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`${styles.footer} ${className}`} {...props}>{children}</div>;
}
