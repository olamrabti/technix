
import React from 'react';

export const UniversityIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="36" width="56" height="24" rx="2" fill="#031965" opacity="0.1" />
        <rect x="8" y="32" width="48" height="4" fill="#031965" />
        <polygon points="32,8 12,24 52,24" fill="#db6e4f" />
        <rect x="20" y="36" width="4" height="16" fill="#031965" />
        <rect x="28" y="36" width="4" height="16" fill="#031965" />
        <rect x="36" y="36" width="4" height="16" fill="#031965" />
        <rect x="44" y="36" width="4" height="16" fill="#031965" />
        <circle cx="32" cy="20" r="2" fill="white" />
    </svg>
);

export const ManufacturingIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="32" width="48" height="24" rx="2" fill="#031965" opacity="0.1" />
        <rect x="12" y="20" width="8" height="32" fill="#031965" />
        <rect x="24" y="16" width="8" height="36" fill="#db6e4f" />
        <rect x="36" y="24" width="8" height="28" fill="#031965" />
        <rect x="48" y="28" width="8" height="24" fill="#031965" />
        <circle cx="16" cy="16" r="3" fill="#db6e4f" />
        <circle cx="28" cy="12" r="3" fill="#031965" />
        <circle cx="40" cy="20" r="3" fill="#db6e4f" />
        <circle cx="52" cy="24" r="3" fill="#031965" />
    </svg>
);

export const GlobalNetworkIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" fill="#031965" opacity="0.1" />
        <circle cx="32" cy="32" r="20" stroke="#031965" strokeWidth="2" fill="none" />
        <ellipse cx="32" cy="32" rx="10" ry="20" stroke="#db6e4f" strokeWidth="2" fill="none" />
        <ellipse cx="32" cy="32" rx="20" ry="10" stroke="#db6e4f" strokeWidth="2" fill="none" />
        <line x1="12" y1="32" x2="52" y2="32" stroke="#031965" strokeWidth="2" />
        <circle cx="32" cy="32" r="3" fill="#db6e4f" />
        <circle cx="20" cy="32" r="2" fill="#031965" />
        <circle cx="44" cy="32" r="2" fill="#031965" />
        <circle cx="32" cy="20" r="2" fill="#031965" />
        <circle cx="32" cy="44" r="2" fill="#031965" />
    </svg>
);

export const TechnologyIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="16" fill="#031965" opacity="0.1" />
        <circle cx="32" cy="32" r="12" stroke="#031965" strokeWidth="3" fill="none" />
        <circle cx="32" cy="32" r="4" fill="#db6e4f" />
        <rect x="30" y="8" width="4" height="8" rx="2" fill="#031965" />
        <rect x="30" y="48" width="4" height="8" rx="2" fill="#031965" />
        <rect x="8" y="30" width="8" height="4" rx="2" fill="#031965" />
        <rect x="48" y="30" width="8" height="4" rx="2" fill="#031965" />
        <rect x="45.5" y="13.5" width="4" height="8" rx="2" fill="#db6e4f" transform="rotate(45 47.5 17.5)" />
        <rect x="14.5" y="42.5" width="4" height="8" rx="2" fill="#db6e4f" transform="rotate(45 16.5 46.5)" />
        <rect x="42.5" y="45.5" width="8" height="4" rx="2" fill="#db6e4f" transform="rotate(45 46.5 47.5)" />
        <rect x="13.5" y="14.5" width="8" height="4" rx="2" fill="#db6e4f" transform="rotate(45 17.5 16.5)" />
    </svg>
);
