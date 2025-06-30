
import React from 'react';

interface LogoProps {
    className?: string;
}

export const SiemensLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <path d="M24 8L30 14L36 14L30 20L36 26L30 26L24 32L18 26L12 26L18 20L12 14L18 14L24 8Z" fill="#031965" />
        <circle cx="24" cy="24" r="3" fill="#db6e4f" />
    </svg>
);

export const ABBLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#031965" fillOpacity="0.1" />
        <path d="M16 20L16 28M20 16L20 32M24 18L24 30M28 22L28 26M32 24L32 24" stroke="#031965" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="36" r="2" fill="#db6e4f" />
    </svg>
);

export const SchneiderLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <path d="M24 12L30 18L24 24L18 18L24 12Z" fill="#db6e4f" />
        <path d="M16 24L22 30L28 24L34 30L28 36L22 30L16 24Z" fill="#031965" />
    </svg>
);

export const BoschLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#031965" fillOpacity="0.1" />
        <rect x="14" y="14" width="20" height="4" fill="#031965" />
        <rect x="14" y="22" width="20" height="4" fill="#db6e4f" />
        <rect x="14" y="30" width="20" height="4" fill="#031965" />
        <circle cx="12" cy="16" r="2" fill="#db6e4f" />
        <circle cx="36" cy="32" r="2" fill="#db6e4f" />
    </svg>
);

export const KUKALogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <path d="M20 12L20 20L16 24L20 28L20 36L24 32L28 36L28 28L32 24L28 20L28 12L24 16L20 12Z" fill="#031965" />
        <circle cx="24" cy="24" r="4" fill="#db6e4f" />
    </svg>
);

export const FanucLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#031965" fillOpacity="0.1" />
        <path d="M16 16L32 16L24 24L32 32L16 32L24 24L16 16Z" fill="#031965" />
        <circle cx="24" cy="24" r="2" fill="#db6e4f" />
    </svg>
);

export const MitsubishiLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <path d="M24 10L30 20L18 20L24 10Z" fill="#db6e4f" />
        <path d="M16 22L22 32L10 32L16 22Z" fill="#031965" />
        <path d="M32 22L38 32L26 32L32 22Z" fill="#031965" />
    </svg>
);

export const RockwellLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#031965" fillOpacity="0.1" />
        <circle cx="18" cy="18" r="3" fill="#031965" />
        <circle cx="30" cy="18" r="3" fill="#031965" />
        <circle cx="18" cy="30" r="3" fill="#031965" />
        <circle cx="30" cy="30" r="3" fill="#031965" />
        <path d="M18 18L30 18L30 30L18 30L18 18Z" stroke="#db6e4f" strokeWidth="2" fill="none" />
    </svg>
);

export const PhoenixLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <rect x="12" y="20" width="24" height="8" fill="#031965" />
        <circle cx="16" cy="24" r="2" fill="white" />
        <circle cx="24" cy="24" r="2" fill="#db6e4f" />
        <circle cx="32" cy="24" r="2" fill="white" />
    </svg>
);

export const FestoLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#031965" fillOpacity="0.1" />
        <circle cx="20" cy="20" r="6" stroke="#031965" strokeWidth="2" fill="none" />
        <circle cx="28" cy="28" r="6" stroke="#db6e4f" strokeWidth="2" fill="none" />
        <path d="M26 20L22 28" stroke="#031965" strokeWidth="2" />
    </svg>
);

export const HoneywellLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#031965" fillOpacity="0.1" />
        <path d="M12 24L18 18L24 24L30 18L36 24L30 30L24 24L18 30L12 24Z" fill="#031965" />
        <circle cx="24" cy="24" r="4" fill="#db6e4f" />
    </svg>
);

export const EmersonLogo = ({ className = "w-12 h-12" }: LogoProps) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#031965" fillOpacity="0.1" />
        <path d="M16 24L24 16L32 24L24 32L16 24Z" stroke="#031965" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="6" stroke="#db6e4f" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="2" fill="#db6e4f" />
    </svg>
);
