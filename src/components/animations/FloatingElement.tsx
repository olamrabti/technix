
import React from 'react';

interface FloatingElementProps {
    children?: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
}

const FloatingElement = ({
    children,
    className = '',
    duration = 3,
    delay = 0
}: FloatingElementProps) => {
    return (
        <div
            className={`animate-pulse ${className}`}
            style={{
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationDirection: 'alternate',
                animationIterationCount: 'infinite',
            }}
        >
            {children}
        </div>
    );
};

export default FloatingElement;
