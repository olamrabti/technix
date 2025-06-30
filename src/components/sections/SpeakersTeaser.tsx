
import { Button } from '@/components/ui/button';
import AnimatedSection from '../animations/AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const SpeakersTeaser = () => {
    const speakers = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Chief Innovation Officer',
            company: 'Global Manufacturing Corp',
            image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face'
        },
        {
            name: 'Prof. Ahmed Hassan',
            role: 'Director of Industrial Research',
            company: 'African Tech Institute',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face'
        },
        {
            name: 'Maria Rodriguez',
            role: 'Head of Sustainability',
            company: 'EcoManufacturing Solutions',
            image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face'
        },
        {
            name: 'Dr. James Chen',
            role: 'Robotics & AI Expert',
            company: 'Future Automation Labs',
            image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face'
        }
    ];

    const { elementRef, visibleItems } = useStaggeredAnimation(speakers.length, 200);

    return (
        <section id="speakers" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-accent to-primary rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Featured Speakers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Learn from industry visionaries and thought leaders shaping the future of manufacturing across Africa and beyond
                    </p>
                </AnimatedSection>

                <div ref={elementRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {speakers.map((speaker, index) => {
                        const isVisible = visibleItems.includes(index);

                        return (
                            <div
                                key={speaker.name}
                                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-accent font-semibold mb-2 text-lg">
                                        {speaker.role}
                                    </p>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {speaker.company}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <AnimatedSection className="text-center" delay={400}>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        See Full Speaker List
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SpeakersTeaser;
