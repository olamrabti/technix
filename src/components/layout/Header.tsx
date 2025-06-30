import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FloatingElement from '../animations/FloatingElement';
import um6pTechniXLogo from '../../assets/UM6P-TechniX-logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Enhanced scroll detection
            setIsScrolled(scrollPosition > 50);

            // Calculate scroll progress
            const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
            setScrollProgress(Math.min(progress, 100));

            // Advanced section detection
            const sections = ['hero', 'overview', 'highlights', 'about', 'venue', 'speakers', 'registration'];
            const scrollOffset = scrollPosition + windowHeight * 0.3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollOffset >= offsetTop && scrollOffset < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Minimalist Progress Bar */}
            <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
                <div
                    className="h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-500 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 py-4'
                : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-8">
                    <div className="flex items-center justify-between">
                        {/* UM6P-TechniX Logo (small, replaces text logo) */}
                        <div className={`transition-all duration-300 flex items-center ${isScrolled ? 'h-8' : 'h-10'}`} style={{ minWidth: '120px' }}>
                            <FloatingElement duration={3} delay={0}>
                                <img
                                    src={um6pTechniXLogo}
                                    alt="UM6P TechniX"
                                    className="h-full max-h-8 md:max-h-10 w-auto object-contain"
                                    style={{ display: 'block' }}
                                />
                            </FloatingElement>
                        </div>

                        {/* Modern Minimalist Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'highlights', label: 'Highlights' },
                                { id: 'venue', label: 'Venue' },
                                { id: 'speakers', label: 'Speakers' },
                                { id: 'registration', label: 'Register' }
                            ].map((item) => (
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id
                                            ? isScrolled
                                                ? 'text-white bg-primary'
                                                : 'text-primary bg-white/20 backdrop-blur-sm'
                                            : isScrolled
                                                ? 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {item.label}
                                    </button>

                                    {/* Modern Active Indicator */}
                                    {activeSection === item.id && (
                                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${isScrolled ? 'bg-primary' : 'bg-white'
                                            }`} />
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Minimalist CTA Button */}
                        <Button
                            onClick={() => scrollToSection('registration')}
                            className={`transition-all duration-300 ${isScrolled
                                ? 'bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white'
                                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary'
                                } px-6 py-2 rounded-full font-medium text-sm`}
                        >
                            Register
                        </Button>
                    </div>
                </div>

                {/* Section Navigator Dots - Minimalist */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-2">
                    {[
                        { id: 'hero', label: 'Hero' },
                        { id: 'overview', label: 'Overview' },
                        { id: 'highlights', label: 'Highlights' },
                        { id: 'speakers', label: 'Speakers' },
                        { id: 'venue', label: 'Venue' },
                        { id: 'registration', label: 'Register' }
                    ].map((item) => (
                        <div key={item.id} className="group relative">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id
                                    ? isScrolled
                                        ? 'bg-primary scale-125'
                                        : 'bg-white scale-125'
                                    : isScrolled
                                        ? 'bg-gray-300 hover:bg-gray-400'
                                        : 'bg-white/40 hover:bg-white/60'
                                    }`}
                            />

                            {/* Tooltip */}
                            <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap ${isScrolled
                                ? 'bg-gray-900 text-white'
                                : 'bg-white/20 backdrop-blur-sm text-white'
                                }`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Header;
