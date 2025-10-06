'use client';

import './contact.scss';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="contact-page">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact
            </motion.h1>
            <h2><a href="mailto:neighbourandy@gmail.com">neighbourandy@gmail.com</a></h2>
            <Footer />
        </div>
    )
}
