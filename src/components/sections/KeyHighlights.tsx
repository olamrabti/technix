
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import AnimatedSection from '../animations/AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import FloatingElement from '../animations/FloatingElement';

const KeyHighlights = () => {
    const highlights = [
        {
            icon: Calendar,
            title: 'Expert Conferences',
            description: 'Industry-leading conferences featuring global experts discussing the latest trends, innovations, and future directions in African manufacturing.',
            color: 'text-primary',
            bgColor: 'bg-primary/5'
        },
        {
            icon: Users,
            title: 'Interactive Workshops',
            description: 'Hands-on workshops providing practical insights, skills development, and collaborative learning opportunities for professionals.',
            color: 'text-accent',
            bgColor: 'bg-accent/5'
        },
        {
            icon: MapPin,
            title: 'Exclusive Factory Tours',
            description: 'Behind-the-scenes factory tours showcasing state-of-the-art manufacturing facilities and cutting-edge technologies in action.',
            color: 'text-primary',
            bgColor: 'bg-primary/5'
        },
        {
            icon: Clock,
            title: 'Networking Gala',
            description: 'Premium networking gala dinner celebrating innovation and fostering meaningful connections among industry leaders and visionaries.',
            color: 'text-accent',
            bgColor: 'bg-accent/5'
        }
    ];

    const { elementRef, visibleItems } = useStaggeredAnimation(highlights.length, 150);

    return (
        <section id="highlights" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Floating Background Elements */}
            <FloatingElement className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full" duration={4} delay={0} />
            <FloatingElement className="absolute top-40 right-20 w-32 h-32 bg-accent/5 rounded-full" duration={5} delay={1} />
            <FloatingElement className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full" duration={3} delay={2} />

            <div className="container mx-auto px-8 relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Key Highlights
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the best of industry innovation through our carefully curated program designed to inspire and transform
                    </p>
                </AnimatedSection>

                <div ref={elementRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {highlights.map((highlight, index) => {
                        const isVisible = visibleItems.includes(index);

                        return (
                            <div
                                key={highlight.title}
                                className={`group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 ${highlight.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    <div className={`mb-8 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <div className={`p-4 ${highlight.bgColor} rounded-2xl inline-block`}>
                                            <highlight.icon size={48} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                                        {highlight.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {highlight.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default KeyHighlights;
