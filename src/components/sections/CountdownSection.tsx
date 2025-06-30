import CountdownTimer from '../CountdownTimer';
import { Calendar } from 'lucide-react';

const CountdownSection = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="border-r border-white/20" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
                        Summit Countdown
                    </h2>
                    <p className="text-xl text-white/80 mb-12 animate-slide-in-left">
                        December 1st, 2025 • 09:00 AM UTC+1
                    </p>

                    <CountdownTimer size="large" />

                    <div className="flex justify-center mt-8 mb-8">
                        <button
                            className="flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors text-lg animate-fade-in"
                        >
                            <Calendar size={22} className="mr-1" />
                            Save the date
                        </button>
                    </div>

                    <p className="text-white/80 text-lg animate-fade-in">
                        Don't miss this transformative event - secure your spot today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
