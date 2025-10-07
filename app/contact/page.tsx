'use client';

import './contact.scss';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import { motion } from 'framer-motion';

export default function Contact() {
    // EmailJS configuration - Replace these with your actual EmailJS credentials
    const emailJSConfig = {
        serviceId: 'your_service_id', // Replace with your EmailJS service ID
        templateId: 'your_template_id', // Replace with your EmailJS template ID
        publicKey: 'your_public_key' // Replace with your EmailJS public key
    };

    return (
        <div className="contact-page">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact
            </motion.h1>

            <ContactCard {...emailJSConfig} />

            <Footer />
        </div>
    )
}
