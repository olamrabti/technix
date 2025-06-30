
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import EventOverview from '@/components/sections/EventOverview';
import ImageSection from '@/components/sections/ImageSection';
import KeyHighlights from '@/components/sections/KeyHighlights';
import CountdownSection from '@/components/sections/CountdownSection';
import AboutOrganizers from '@/components/sections/AboutOrganizers';
import WhyAttend from '@/components/sections/WhyAttend';
import VenueSection from '@/components/sections/VenueSection';
import AgendaTeaser from '@/components/sections/AgendaTeaser';
import SpeakersTeaser from '@/components/sections/SpeakersTeaser';
import Exhibitors from '@/components/sections/Exhibitors';
import RegistrationSection from '@/components/sections/RegistrationSection';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <EventOverview />

            {/* Image between EventOverview and KeyHighlights
            <ImageSection
                imageSrc="/lovable-uploads/bd916f7a-8c1f-4028-9941-7ddaca323749.png"
                alt="Conference audience engaged in professional development session"
                position="right"
                caption="Industry leaders connecting with cutting-edge technology"
            /> */}

            <KeyHighlights />
            <CountdownSection />
            <AboutOrganizers />

            {/* Image between AboutOrganizers and WhyAttend */}
            {/* <ImageSection
                imageSrc="/lovable-uploads/bd916f7a-8c1f-4028-9941-7ddaca323749.png"
                alt="Professional presenting to engaged audience in modern conference setting"
                position="left"
                caption="Collaborative innovation driving Africa's industrial future"
            /> */}

            <WhyAttend />
            <VenueSection />

            {/* Image between VenueSection and AgendaTeaser */}
            {/* <ImageSection
                imageSrc="/lovable-uploads/bd916f7a-8c1f-4028-9941-7ddaca323749.png"
                alt="Conference program materials and documentation"
                position="left"
                caption="Innovation and technology at the heart of manufacturing"
            /> */}

            <AgendaTeaser />

            {/* Image between AgendaTeaser and SpeakersTeaser */}
            {/* <ImageSection
                imageSrc="/lovable-uploads/bd916f7a-8c1f-4028-9941-7ddaca323749.png"
                alt="Professional networking and knowledge exchange at conference"
                position="right"
                caption="Networking and knowledge exchange at the summit"
            /> */}

            <SpeakersTeaser />
            <Exhibitors />
            <RegistrationSection />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Index;
