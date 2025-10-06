'use client';

import './styles/home.scss';
import Image from 'next/image';
import Link from 'next/link';
import Links from './components/Links';
import { motion } from 'framer-motion';

export default function Home() {
  const buttons = [
    { href: '/merch', label: 'Shop' },
    { href: '/music', label: 'Listen' },
    { href: '/watch', label: 'Watch' },
    { href: '/shows', label: 'Gigs' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },

  ];

  return (
    <div className="home-page">
      {/* Landing Section */}
      <section id="landing" className="landing-section">
        <div className="landing-content">
          <motion.div
            className="hero-title"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/nb-logo.png"
              alt="Neighbour Andy"
              width={600}
              height={200}
              priority
            />
          </motion.div>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            <h4 className="hero-tagline">cool stuff, slick stuff, neat stuff</h4>
          </motion.div>

          <motion.div
            className="main-page-button-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
          >
            {buttons.map((button, index) => (
              <Link key={button.href} href={button.href}>
                <motion.button
                  className="main-page-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + (index * 0.1),
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.label}
                </motion.button>
              </Link>
            ))}
          </motion.div>

          <motion.div
            className="links-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
            <Links />
          </motion.div>
        </div>
      </section>


    </div>
  );
}
