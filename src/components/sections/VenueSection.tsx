
const VenueSection = () => {
    return (
        <section id="venue" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Venue
                        </h2>

                        <h3 className="text-2xl font-semibold text-accent mb-4">
                            UM6P Benguerir Campus
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Located in the heart of Morocco, the UM6P Benguerir campus provides
                                a world-class venue for the NextGen Manufacturing Summit. This modern
                                facility offers state-of-the-art conference halls, exhibition spaces,
                                and networking areas designed to facilitate meaningful connections
                                and knowledge exchange.
                            </p>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-primary mb-3">Accessibility & Logistics</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• 1 hour drive from Mohammed V International Airport (CMN)</li>
                                    <li>• Complimentary shuttle service from Casablanca</li>
                                    <li>• On-campus accommodation available</li>
                                    <li>• Multilingual support and assistance</li>
                                    <li>• Modern facilities with high-speed internet</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white text-center">
                            <div className="text-6xl mb-6">🏛️</div>
                            <h3 className="text-2xl font-bold mb-4">UM6P Campus</h3>
                            <p className="text-lg opacity-90 mb-6">
                                A premier destination for innovation and collaboration
                            </p>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                <p className="text-sm">
                                    📍 Benguerir, Morocco<br />
                                    🕐 December 1-3, 2025<br />
                                    👥 500+ Attendees Expected
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VenueSection;
