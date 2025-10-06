'use client';

import './watch.scss';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Watch() {
    return (
        <div className="watch-page">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Watch
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="watch-iframe"
            >
                <iframe
                    width="990"
                    height="560"
                    src="https://www.youtube.com/embed/UQbBM2wRDUQ?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=1"
                    title="Niagra Street"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </motion.div>
            <Footer />
        </div>
    )
}