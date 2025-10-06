'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BandMateCard from './BandMateCard';
import { BandMate } from '../types/bandmate';
import './BandMatesCarousel.scss';

interface BandMatesCarouselProps {
    bandMates: BandMate[];
}

export default function BandMatesCarousel({ bandMates }: BandMatesCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bandMates.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [bandMates.length, isAutoPlaying]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + bandMates.length) % bandMates.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % bandMates.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <motion.div
            className="band-mates-carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Main carousel container */}
            <div className="band-mates-carousel__container">
                {/* Navigation buttons */}
                <motion.button
                    className="band-mates-carousel__nav band-mates-carousel__nav--prev"
                    onClick={goToPrevious}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    ‹
                </motion.button>

                {/* Cards container */}
                <div className="band-mates-carousel__cards">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="band-mates-carousel__slide"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <BandMateCard
                                bandMate={bandMates[currentIndex]}
                                index={currentIndex}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.button
                    className="band-mates-carousel__nav band-mates-carousel__nav--next"
                    onClick={goToNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    ›
                </motion.button>
            </div>

            {/* Indicators */}
            <motion.div
                className="band-mates-carousel__indicators"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                {bandMates.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`band-mates-carousel__indicator ${index === currentIndex ? 'active' : ''
                            }`}
                        onClick={() => goToSlide(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
