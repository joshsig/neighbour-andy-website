'use client';

import './music.scss';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { client } from '../lib/sanity';
import { useState, useEffect } from 'react';
import type { Release } from '../types/release';

const RELEASES_QUERY = `*[_type == "release"] {
    _id,
    _type,
    title,
    releaseType,
    releaseDate,
    coverImage {
        _type,
        asset-> {
            _ref,
            _type
        },
        alt
    }
}`;

export default function Music() {
    const [releases, setReleases] = useState<Release[]>([]);

    useEffect(() => {
        async function fetchReleases() {
            const data = await client.fetch<Release[]>(RELEASES_QUERY);
            setReleases(data);
        }

        fetchReleases();
    }, []);

    return (
        <div>
            <h1>Music</h1>
            <Footer />
        </div>
    )
}