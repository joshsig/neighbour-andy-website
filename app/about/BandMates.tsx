'use client';

import { motion } from 'framer-motion';
import BandMatesCarousel from '../components/BandMatesCarousel';
import { bandMatesData } from '../data/bandMatesData';
import './BandMates.scss';

export default function BandMates() {
    return (
        <motion.div
            className="band-mates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Meet The Boys
            </motion.h1>

            <BandMatesCarousel bandMates={bandMatesData} />
        </motion.div>
    );
}