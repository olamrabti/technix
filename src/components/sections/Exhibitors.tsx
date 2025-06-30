
import { Button } from '@/components/ui/button';
import AnimatedSection from '../animations/AnimatedSection';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import {
    SiemensLogo,
    ABBLogo,
    SchneiderLogo,
    BoschLogo,
    KUKALogo,
    FanucLogo,
    MitsubishiLogo,
    RockwellLogo,
    PhoenixLogo,
    FestoLogo,
    HoneywellLogo,
    EmersonLogo
} from '../icons/ExhibitorLogos';

const Exhibitors = () => {
    const exhibitors = [
        {
            name: 'Siemens Digital Industries',
            logo: SiemensLogo,
            description: 'Industrial automation & digitalization'
        },
        {
            name: 'ABB Robotics',
            logo: ABBLogo,
            description: 'Robotics & automation solutions'
        },
        {
            name: 'Schneider Electric',
            logo: SchneiderLogo,
            description: 'Energy management & automation'
        },
        {
            name: 'Bosch Rexroth',
            logo: BoschLogo,
            description: 'Drive & control technologies'
        },
        {
            name: 'KUKA Automation',
            logo: KUKALogo,
            description: 'Industrial robotics & automation'
        },
        {
            name: 'Fanuc Corporation',
            logo: FanucLogo,
            description: 'Factory automation & robotics'
        },
        {
            name: 'Mitsubishi Electric',
            logo: MitsubishiLogo,
            description: 'Industrial automation systems'
        },
        {
            name: 'Rockwell Automation',
            logo: RockwellLogo,
            description: 'Industrial automation & information'
        },
        {
            name: 'Phoenix Contact',
            logo: PhoenixLogo,
            description: 'Connection & automation technology'
        },
        {
            name: 'Festo Pneumatic',
            logo: FestoLogo,
            description: 'Pneumatic & electric automation'
        },
        {
            name: 'Honeywell Industrial',
            logo: HoneywellLogo,
            description: 'Process automation & control'
        },
        {
            name: 'Emerson Automation',
            logo: EmersonLogo,
            description: 'Automation solutions & software'
        }
    ];

    const { elementRef, visibleItems } = useStaggeredAnimation(exhibitors.length, 100);

    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-8">
                <AnimatedSection className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Innovation Showcase
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover cutting-edge solutions from leading technology partners driving the future of manufacturing
                    </p>
                </AnimatedSection>

                <div ref={elementRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
                    {exhibitors.map((exhibitor, index) => {
                        const LogoComponent = exhibitor.logo;
                        const isVisible = visibleItems.includes(index);

                        return (
                            <div
                                key={exhibitor.name}
                                className={`group bg-white p-8 rounded-2xl text-center border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-accent/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <LogoComponent className="w-16 h-16" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                                    {exhibitor.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {exhibitor.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <AnimatedSection className="text-center">
                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300"
                    >
                        View Innovation Showcase
                    </Button>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Exhibitors;
