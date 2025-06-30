
import AnimatedSection from '../animations/AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { UniversityIcon, ManufacturingIcon, GlobalNetworkIcon, TechnologyIcon } from '../icons/OrganizationIcons';

const AboutOrganizers = () => {
    const organizers = [
        {
            name: 'UM6P TECHNIX',
            description: 'Leading research and innovation university driving technological advancement across Africa with cutting-edge facilities and world-class research programs.',
            icon: UniversityIcon
        },
        {
            name: 'AISMA',
            description: 'African Industrial Summit for Manufacturing Advancement, dedicated to promoting sustainable industrial development and innovation across the continent.',
            icon: ManufacturingIcon
        },
        {
            name: 'UNIDO',
            description: 'United Nations Industrial Development Organization supporting sustainable industrial development and inclusive economic growth worldwide.',
            icon: GlobalNetworkIcon
        },
        {
            name: 'Hannover Messe',
            description: 'World\'s leading trade fair for industrial technology, innovation, and digital transformation in manufacturing.',
            icon: TechnologyIcon
        }
    ];

    const { elementRef, visibleItems } = useStaggeredAnimation(organizers.length, 150);

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-full"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <AnimatedSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        About the Organizers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Brought to you by leading organizations committed to advancing African manufacturing and industrial innovation
                    </p>
                </AnimatedSection>

                <div ref={elementRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {organizers.map((organizer, index) => {
                        const IconComponent = organizer.icon;
                        const isVisible = visibleItems.includes(index);

                        return (
                            <div
                                key={organizer.name}
                                className={`group text-center p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="mb-8 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-20 h-20" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                                    {organizer.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {organizer.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutOrganizers;
