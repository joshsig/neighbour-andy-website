'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BandMateCard from './BandMateCard';
import { BandMate } from '../types/bandmate';
import './BandMatesCarousel.scss';

interface BandMatesCarouselProps {
    bandMates: BandMate[];
}

export default function BandMatesCarousel({ bandMates }: BandMatesCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        once: true,
        margin: "-100px"
    });

    return (
        <motion.div
            ref={containerRef}
            className="band-mates-carousel"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Cards container */}
            <div className="band-mates-carousel__cards">
                {bandMates.map((bandMate, index) => (
                    <motion.div
                        key={bandMate.name}
                        className="band-mates-carousel__card-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.5,
                            delay: isInView ? index * 0.1 : 0,
                            ease: "easeOut"
                        }}
                    >
                        <BandMateCard
                            bandMate={bandMate}
                            index={index}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
