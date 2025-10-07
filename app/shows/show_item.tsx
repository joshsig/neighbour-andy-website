'use client';

import { Show } from '../types/show';
import './shows.scss';
import { motion } from 'framer-motion';

export default function ShowItem({ show }: { show: Show }) {
    // Format date as "OCT 10, 2025"
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    return (
        <motion.div
            className="show-item"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="show-item__left">
                <div className="show-item__date">{formatDate(show.date)}</div>
                <div className="show-item__title">{show.title}</div>
                <div className="show-item__venue">{show.venue}</div>
                {show.supportingActs && show.supportingActs.length > 0 && (
                    <div className="show-item__supporting">
                        with {show.supportingActs.join(', ')}
                    </div>
                )}
            </div>

            <div className="show-item__location">
                {show.location.city}, {show.location.state || show.location.country}
            </div>

            <div className="show-item__actions">
                {show.ticketLink && (
                    <a href={show.ticketLink} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            className="show-item__button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            TICKETS
                        </motion.button>
                    </a>
                )}
            </div>
        </motion.div>
    );
}