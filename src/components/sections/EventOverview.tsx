
import AnimatedSection from '../animations/AnimatedSection';
import FloatingElement from '../animations/FloatingElement';

const EventOverview = () => {
    return (
        <section id="overview" className="py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <FloatingElement className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full" duration={5} delay={0} />
            <FloatingElement className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full" duration={4} delay={2} />

            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10">
                            Event Overview
                        </h2>
                    </AnimatedSection>

                    <div className="text-xl text-gray-700 leading-relaxed space-y-8">
                        <AnimatedSection delay={200}>
                            <p>
                                The NextGen Manufacturing Summit Africa brings together industry leaders,
                                innovators, and policy makers to shape the future of manufacturing across
                                the African continent. This premier event showcases cutting-edge technologies,
                                sustainable practices, and collaborative opportunities that will drive
                                industrial transformation for generations to come.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <p>
                                Over three transformative days, participants will engage in high-level
                                discussions, hands-on workshops, and networking opportunities that foster
                                innovation and build lasting partnerships across the manufacturing ecosystem.
                                Join us in creating the blueprint for Africa's industrial renaissance.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={600}>
                            <div className="grid md:grid-cols-3 gap-10 mt-16">
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="text-4xl font-bold text-accent mb-3">500+</div>
                                    <div className="text-gray-600 text-lg">Industry Leaders & Professionals</div>
                                </div>
                                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="text-4xl font-bold text-primary mb-3">50+</div>
                                    <div className="text-gray-600 text-lg">Expert Speakers & Thought Leaders</div>
                                </div>
                                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="text-4xl font-bold text-accent mb-3">100+</div>
                                    <div className="text-gray-600 text-lg">Technology Exhibitors & Partners</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventOverview;
