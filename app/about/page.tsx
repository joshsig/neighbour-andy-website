'use client';

import AboutSection from './AboutSection';
import BandMates from './BandMates';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function About() {
    // Define your content sections - easily add more grids by creating new section arrays
    const bioSection = [
        {
            type: 'text' as const,
            content: "Neighbour Andy's sound feels like putting on your dad's favourite record: nostalgic and warm. The quintet from Winnipeg, Canada is a young and fresh indie band by traditional artistic standards, but listen to their music and you'll find yourself grasping at a sense of familiarity - their melodies and charismatic signature vocals capture a comfort once thought to only be achieved by bands that stand the test of time."
        },
        {
            type: 'image' as const,
            content: '/images/nb-festi.jpg',
            alt: 'Neighbour Andy at festival'
        },
        {
            type: 'image' as const,
            content: '/images/nb-main.jpg',
            alt: 'Neighbour Andy band photo'
        },
        {
            type: 'text' as const,
            content: "Their sound cohesively layers an unlikely yet likable magnetic mix of indie rock and Americana with an alternative twist reminiscent of young love and your \"good old days.\" Balanced by tenderhearted lyrical dissonance, the boys, Drake Lesperance (lead vocals), Mark Davidson (guitar), MacKenzie Jackson (bass), Joel d'Eschambault (keys), Jordan Alexiuk (drums) sparked popularity through word of mouth in August 2022 upon releasing the band's debut summer single, 71, a track inspired by rosy-lensed coming-of-age memories in Mark's childhood home."
        },
        {
            type: 'text' as const,
            content: "With growing buzz, they released their debut self-titled EP just a few weeks later. Five tracks out in the world, and these once university-dive-bar-gigging buddies sold out their 500-cap EP release show at Winnipeg’s Park Theatre. They’ve sold out multiple performances in the short time since (one in as few as three minutes), proving a loyal cult following in their live show. They’ve also been a featured performer at festivals like NXNE, Festival du Voyageur, on CBC Radio and performed in venues across Canada including Vancouver, Calgary, and Toronto. "
        },
        {
            type: 'image' as const,
            content: '/images/nb-festi1.jpg',
            alt: 'Neighbour Andy band photo'
        }
    ];

    return (
        <div className="about-page">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Discovering Andy
            </motion.h1>

            {/* First grid section */}
            <AboutSection sections={bioSection} />

            {/* Example: Add more sections by simply adding more AboutSection components
            <AboutSection sections={anotherSection} />
            */}
            <BandMates />
            <Footer />
        </div>
    )
}
