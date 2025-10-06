import './AboutSection.scss';
import { motion } from 'framer-motion';

interface AboutSectionProps {
    sections: {
        type: 'text' | 'image';
        content: string; // text content or image src
        alt?: string; // alt text for images
    }[];
}

export default function AboutSection({ sections }: AboutSectionProps) {
    return (
        <div className="about-grid">
            {sections.map((section, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    className={`about-grid__item ${section.type === 'text' ? 'about-grid__text' : 'about-grid__image'}`}
                >
                    {section.type === 'text' ? (
                        <p>{section.content}</p>
                    ) : (
                        <img src={section.content} alt={section.alt || 'Band photo'} />
                    )}
                </motion.div>
            ))}
        </div>
    );
}

