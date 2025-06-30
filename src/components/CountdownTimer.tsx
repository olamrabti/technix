import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    isHero?: boolean;
    size?: 'normal' | 'large';
}

const CountdownTimer = ({ isHero = false, size = 'normal' }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-12-01T09:00:00+01:00');

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    const sizeClasses = size === 'large'
        ? 'text-4xl md:text-6xl p-6 md:p-8'
        : isHero
            ? 'text-3xl md:text-4xl p-4'
            : 'text-2xl md:text-3xl p-6';
    const labelClasses = size === 'large'
        ? 'text-lg md:text-xl'
        : isHero
            ? 'text-white/80 text-sm'
            : 'text-gray-200 text-sm';
    const boxClasses = size === 'large'
        ? 'bg-white/30 backdrop-blur-lg rounded-xl shadow-xl'
        : isHero
            ? 'bg-white/20 backdrop-blur-md rounded-lg'
            : 'bg-primary text-white rounded-lg shadow-lg';

    return (
        <div className={`flex justify-center space-x-4 ${isHero ? 'mb-8' : 'mb-12'}`}>
            {timeUnits.map((unit, index) => (
                <div
                    key={unit.label}
                    className={`${boxClasses} animate-scale-in ${size === 'large' ? 'min-w-[90px]' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className={`font-bold ${sizeClasses}`}>
                        {unit.value.toString().padStart(2, '0')}
                    </div>
                    <div className={`${labelClasses} uppercase tracking-wide`}>
                        {unit.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
