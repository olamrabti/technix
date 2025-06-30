
import React from 'react';
import AnimatedSection from '../animations/AnimatedSection';

interface ImageSectionProps {
    imageSrc: string;
    alt: string;
    position: 'left' | 'right';
    caption?: string;
    className?: string;
}

const ImageSection = ({
    imageSrc,
    alt,
    position,
    caption,
    className = ''
}: ImageSectionProps) => {
    return (
        <section className={`py-0 bg-white overflow-hidden ${className}`}>
            <AnimatedSection>
                <div className="relative w-full h-96 group">
                    <img
                        src={imageSrc}
                        alt={alt}
                        className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    {caption && (
                        <div className={`absolute bottom-8 ${position === 'left' ? 'left-8' : 'right-8'} max-w-md`}>
                            <p className="text-white font-medium text-xl backdrop-blur-sm bg-black/40 p-6 rounded-lg shadow-lg">
                                {caption}
                            </p>
                        </div>
                    )}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default ImageSection;
