
import { Button } from '@/components/ui/button';

const RegistrationSection = () => {
    return (
        <section id="registration" className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 h-full">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="border-r border-white/20" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
                        Secure Your Spot Today
                    </h2>

                    <p className="text-xl text-white/90 mb-12 animate-slide-in-left">
                        Join 500+ industry leaders in shaping Africa's manufacturing future
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white animate-scale-in">
                            <h3 className="text-2xl font-bold mb-4">Individual Registration</h3>
                            <div className="text-4xl font-bold text-accent mb-4">$499</div>
                            <ul className="text-left space-y-2 mb-6 text-white/90">
                                <li>• Full 3-day access</li>
                                <li>• All conference sessions</li>
                                <li>• Networking events</li>
                                <li>• Workshop participation</li>
                                <li>• Lunch & refreshments</li>
                            </ul>
                            <Button
                                size="lg"
                                className="w-full bg-accent hover:bg-accent/90 text-white"
                            >
                                Register Individual
                            </Button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white animate-scale-in" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-2xl font-bold mb-4">Group Registration</h3>
                            <div className="text-4xl font-bold text-accent mb-4">$399</div>
                            <p className="text-sm text-white/80 mb-4">per person (min. 5 people)</p>
                            <ul className="text-left space-y-2 mb-6 text-white/90">
                                <li>• Everything in Individual</li>
                                <li>• 20% discount for groups</li>
                                <li>• Dedicated group coordinator</li>
                                <li>• Group networking session</li>
                                <li>• Custom workshop options</li>
                            </ul>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-white text-white hover:bg-white hover:text-primary"
                            >
                                Register Group
                            </Button>
                        </div>
                    </div>

                    <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <p className="text-white/80 mb-4">
                            Early bird pricing available until October 1st, 2025
                        </p>
                        <p className="text-sm text-white/60">
                            * Prices include VAT. Travel and accommodation not included.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
