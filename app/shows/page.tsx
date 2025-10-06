'use client';

import './shows.scss';
import ShowItem from './show_item';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// TODO: Get shows from Sanity, use mock data for now
const shows = [
    {
        _id: '1',
        _type: 'show' as const,
        title: 'Higher Ground',
        date: '2025-10-10',
        venue: 'Higher Ground',
        location: {
            city: 'South Burlington',
            state: 'VT',
            country: 'USA',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'higher-ground-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
        supportingActs: ['Racing Mount Pleasant'],
    },
    {
        _id: '2',
        _type: 'show' as const,
        title: 'The Opera House',
        date: '2025-10-11',
        venue: 'The Opera House',
        location: {
            city: 'Toronto',
            state: 'ON',
            country: 'Canada',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'opera-house-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
        supportingActs: ['Racing Mount Pleasant'],
    },
    {
        _id: '3',
        _type: 'show' as const,
        title: 'The Opera House',
        date: '2025-10-11',
        venue: 'The Opera House',
        location: {
            city: 'Winnipeg',
            state: 'MB',
            country: 'Canada',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'opera-house-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
    },
    {
        _id: '4',
        _type: 'show' as const,
        title: 'The Majestic Theatre',
        date: '2025-10-13',
        venue: 'The Majestic Theatre',
        location: {
            city: 'Detroit',
            state: 'MI',
            country: 'USA',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'majestic-theatre-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
        supportingActs: ['Racing Mount Pleasant'],
    },
    {
        _id: '5',
        _type: 'show' as const,
        title: 'Thalia Hall',
        date: '2025-10-15',
        venue: 'Thalia Hall',
        location: {
            city: 'Chicago',
            state: 'IL',
            country: 'USA',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'thalia-hall-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
        supportingActs: ['Racing Mount Pleasant'],
    },
    {
        _id: '6',
        _type: 'show' as const,
        title: 'The Catalyst',
        date: '2025-10-17',
        venue: 'The Catalyst',
        location: {
            city: 'Santa Cruz',
            state: 'CA',
            country: 'USA',
        },
        status: 'upcoming' as const,
        featured: false,
        slug: {
            current: 'catalyst-oct-2025',
            _type: 'slug' as const,
        },
        ticketLink: 'https://example.com/tickets',
    },
];

export default function Shows() {
    return (
        <div className="shows-page">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Upcoming Shows
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                check us out real soon
            </motion.h2>
            <motion.div
                className="shows-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
            >
                {shows.length > 0 ? (
                    shows.map((show, index) => (
                        <motion.div
                            key={show._id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6 + (index * 0.1),
                                ease: "easeOut"
                            }}
                        >
                            <ShowItem show={show} />
                        </motion.div>
                    ))
                ) : (
                    <motion.div
                        className="no-shows-message"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <p>No upcoming shows at the moment.</p>
                        <p>Check back soon for new dates!</p>
                    </motion.div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
            >
                <Footer />
            </motion.div>
        </div>
    )
}
