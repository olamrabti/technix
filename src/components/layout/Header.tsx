import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FloatingElement from '../animations/FloatingElement';
import um6pTechniXLogo from '../../assets/UM6P-TechniX-logo.png';
import { Menu } from 'lucide-react';

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
            const sections = ['hero', 'overview', 'about'];
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

            <header className={
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 py-4'
            }>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between">
                        {/* Responsive UM6P-TechniX Logo (smaller on mobile) */}
                        <div className="transition-all duration-300 flex items-center w-24 sm:w-28 md:w-32 lg:w-40 h-8 md:h-10">
                            <FloatingElement duration={3} delay={0}>
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="focus:outline-none"
                                    aria-label="Go to top / hero section"
                                    style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                                >
                                    <img
                                        src={um6pTechniXLogo}
                                        alt="UM6P TechniX"
                                        className="w-full max-w-full h-auto object-contain"
                                        style={{ display: 'block' }}
                                    />
                                </button>
                            </FloatingElement>
                        </div>

                        {/* Hamburger Icon for Mobile */}
                        <button className="md:hidden p-2 rounded focus:outline-none" aria-label="Open menu">
                            <Menu size={28} />
                        </button>

                        {/* Modern Minimalist Navigation (hidden on mobile) */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'about', label: 'Organizers' },
                                // { id: 'countdown', label: 'Countdown' }
                            ].map((item) => (
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id
                                            ? 'text-white bg-primary'
                                            : 'text-black hover:text-primary hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                    {/* Modern Active Indicator */}
                                    {activeSection === item.id && (
                                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 bg-primary`} />
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Minimalist CTA Button */}
                        <Button
                            onClick={() => scrollToSection('registration')}
                            className={'hidden md:inline-flex transition-all duration-300 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-6 py-2 rounded-full font-medium text-sm'}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
