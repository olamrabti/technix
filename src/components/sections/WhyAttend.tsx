
const WhyAttend = () => {
    const reasons = [
        'Network with 500+ industry leaders and decision makers',
        'Access exclusive insights from global manufacturing experts',
        'Discover cutting-edge technologies and innovative solutions',
        'Explore partnership opportunities across African markets',
        'Participate in hands-on workshops and skill development sessions',
        'Experience factory tours of state-of-the-art facilities',
        'Engage with policy makers shaping industrial regulations',
        'Join the movement towards sustainable manufacturing practices'
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
                            Why Attend
                        </h2>
                        <p className="text-lg text-gray-600 animate-slide-in-left">
                            Join industry leaders in shaping the future of manufacturing in Africa
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAttend;
