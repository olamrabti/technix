
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setIsVisible(scrolled > 500);

            // Calculate scroll progress for the circular progress indicator
            const progress = (scrolled / (documentHeight - windowHeight)) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90 pointer-events-none'
            }`}>
            <div className="relative">
                {/* Circular Progress Indicator */}
                <svg className="absolute inset-0 w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-gray-300"
                    />
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                        className="text-accent transition-all duration-300"
                        strokeLinecap="round"
                    />
                </svg>

                <Button
                    onClick={scrollToTop}
                    size="lg"
                    className="relative rounded-full bg-white hover:bg-gray-50 text-primary shadow-2xl border border-gray-200 w-16 h-16 p-0 hover:scale-110 transition-all duration-300"
                >
                    <ArrowUp size={24} />
                </Button>
            </div>
        </div>
    );
};

export default ScrollToTop;
