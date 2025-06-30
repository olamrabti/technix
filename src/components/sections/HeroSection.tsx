import { ArrowDown } from 'lucide-react';
import FloatingElement from '../animations/FloatingElement';
import heroVideo from '../../assets/hero.mp4';
import um6pLogo from '../../assets/UM6P-TechniX-logo.png';

const HeroSection = () => {
    const scrollToOverview = () => {
        const element = document.getElementById('overview');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                >
                    <source src={heroVideo} type="video/mp4" />
                    {/* Fallback background for browsers that don't support video */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
                        style={{
                            backgroundImage: `linear-gradient(rgba(3, 25, 101, 0.8), rgba(3, 25, 101, 0.6)), url('/lovable-uploads/f2f94522-d9de-4c14-a153-99e2f744bbc0.png')`
                        }}
                    />
                </video>

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/60"></div>

                {/* Additional overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40"></div>
            </div>

            {/* Animated Grid Overlay with Floating Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border-r border-white/20" />
                    ))}
                </div>
            </div>

            {/* Floating Background Elements */}
            <FloatingElement className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full" duration={4} delay={0} />
            <FloatingElement className="absolute top-40 right-32 w-6 h-6 bg-accent/30 rounded-full" duration={5} delay={1} />
            <FloatingElement className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/30 rounded-full" duration={3} delay={2} />
            <FloatingElement className="absolute bottom-40 right-1/4 w-5 h-5 bg-accent/20 rounded-full" duration={6} delay={3} />

            {/* UM6P-TechniX Logo - Center Right */}
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 flex items-center justify-end w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80">
                <FloatingElement duration={4} delay={0}>
                    <img
                        src={um6pLogo}
                        alt="UM6P TechniX"
                        className="w-full max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg filter brightness-0 invert"
                    />
                </FloatingElement>
            </div>

            {/* Event Writing - Bottom Left */}
            <div className="absolute left-4 md:left-12 bottom-24 md:bottom-16 z-20 flex flex-col items-start max-w-[90vw] md:max-w-lg">
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 drop-shadow-lg uppercase">
                    NEXTGEN<br />MANUFACTURING<br />SUMMIT AFRICA
                </h1>
                <span className="bg-[#6C3DF4] text-white font-bold text-base sm:text-lg md:text-xl px-3 py-1 rounded mb-2 drop-shadow-lg">
                    September 30 &amp; October 1, 2025
                </span>
                <span className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow-lg">
                    UM6P Ben Guerir, Morocco
                </span>
            </div>

            {/* Scroll to Overview Button - At the very end */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <button
                    onClick={scrollToOverview}
                    className="text-white"
                // className="group text-white/80 hover:text-white transition-all duration-300 flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-full  hover:bg-white/20"
                >
                    <span className="text-sm uppercase tracking-wider">&nbsp;</span>
                    <div className="animate-bounce group-hover:animate-pulse w-20  flex justify-center">
                        <ArrowDown size={24} />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
