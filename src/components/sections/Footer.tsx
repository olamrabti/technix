import { Mail } from 'lucide-react';
import um6pTechniXLogo from '../../assets/UM6P-TechniX-logo.png';

const Footer = () => {
    const quickLinks = [
        { label: 'Travel Information', href: '#travel' },
        { label: 'Visa Requirements', href: '#visa' },
        { label: 'Accommodation', href: '#accommodation' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact Us', href: '#contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Information */}
                    <div className="animate-fade-in">
                        <div className="mb-6 flex items-center h-10">
                            <img
                                src={um6pTechniXLogo}
                                alt="UM6P TechniX"
                                className="h-full max-h-8 md:max-h-10 w-auto object-contain"
                                style={{ display: 'block' }}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail size={20} className="text-accent" />
                                <a
                                    href="mailto:info@nextgensummit.africa"
                                    className="hover:text-accent transition-colors"
                                >
                                    info@nextgensummit.africa
                                </a>
                            </div>

                            <div className="text-gray-300">
                                <p>UM6P Benguerir Campus</p>
                                <p>Benguerir, Morocco</p>
                                <p>December 1-3, 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-slide-in-left">
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div className="animate-slide-in-right">
                        <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
                        <p className="text-gray-300 mb-6">
                            Get the latest updates about the summit and manufacturing industry insights.
                        </p>

                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                                LinkedIn
                            </a>
                            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                                Twitter
                            </a>
                            <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 NextGen Manufacturing Summit Africa. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Organized by UM6P TECHNIX, AISMA, UNIDO, and Hannover Messe
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
