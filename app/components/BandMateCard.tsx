'use client';

import { motion } from 'framer-motion';
import { BandMate } from '../types/bandmate';
import './BandMateCard.scss';

interface BandMateCardProps {
    bandMate: BandMate;
    index: number;
}

export default function BandMateCard({ bandMate, index }: BandMateCardProps) {
    return (
        <motion.div
            className="band-mate-card"
            whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div
                className="band-mate-card__image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={bandMate.photo}
                    alt={bandMate.alt}
                    className="band-mate-card__image"
                />
            </motion.div>

            <div className="band-mate-card__content">
                <h3 className="band-mate-card__name">{bandMate.name}</h3>
                <p className="band-mate-card__role">{bandMate.role}</p>
                <p className="band-mate-card__bio">{bandMate.bio}</p>
            </div>
        </motion.div>
    );
}
