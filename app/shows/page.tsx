'use client';

import './shows.scss';
import ShowItem from './show_item';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import type { Show } from '../types/show';

// GROQ query to fetch upcoming shows
const SHOWS_QUERY = `*[_type == "show"] | order(date asc) {
  _id,
  _type,
  title,
  date,
  venue,
  location,
  status,
  featured,
  slug,
  ticketLink,
  venueWebsite,
  description,
  supportingActs,
  ageRestriction,
  ticketPrice,
  venueImage,
  doorsOpen,
  showStart
}`;

export default function Shows() {
    const [shows, setShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchShows() {
            try {
                setLoading(true);
                const data = await client.fetch<Show[]>(SHOWS_QUERY);
                setShows(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching shows:', err);
                setError('Failed to load shows. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        fetchShows();
    }, []);

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

            {loading ? (
                <motion.div
                    className="loading-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <p>Loading shows...</p>
                </motion.div>
            ) : error ? (
                <motion.div
                    className="error-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <p>{error}</p>
                </motion.div>
            ) : (
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
            )}

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
