
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Company: [
            { name: 'About', href: '/about' },
            { name: 'Project', href: '/project' },
            { name: 'Objective', href: '/objective' },
            { name: 'Contact', href: '/contact' },
        ],
        Resources: [
            { name: 'Donate Us', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Be Our Donors', href: '#' },
            { name: 'Terms of Service', href: '#' },
        ],
        Social: [
            { name: 'Twitter / X', href: '#' },
            { name: 'LinkedIn', href: '#' },
            { name: 'GitHub', href: '#' },
        ]
    };

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Brand & Mission - Laptop par 2 column lega */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-black bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent tracking-tighter">
                            Trust Foundation

                        </Link>
                        <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm">
                            Trust Foundation is a grass root level organization which is formed by a group of youngsters who wants to see the underprivileged getting what they deserve especially in the areas of education & health.
                            <br />
                            It's a fairly new setup which has been focusing in the prime slums of various states in India. Marginalized society in the country are unware of their rights and which leads to forcing them more towards poverty
                        </p>
                    </div>

                    {/* Dynamic Links Mapping */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                                {category}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Copyright & Bottom Links */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">
                        © {currentYear} Trustly Inc. All rights reserved. Made for Global Scale.
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Systems Normal</span>
                        </div>
                        {/* Language Selector (Optional) */}
                        <select className="text-xs bg-transparent border-none text-gray-500 focus:ring-0 cursor-pointer">
                            <option>English (US)</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
} 