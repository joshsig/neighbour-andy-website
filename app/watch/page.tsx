'use client';

import './watch.scss';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import { motion } from 'framer-motion';
import { client } from '../lib/sanity';
import { useState, useEffect } from 'react';
import type { Video } from '../types/video';

const VIDEOS_QUERY = `*[_type == "video"] | order(order asc) {
    _id,
    _type,
    title,
    videoUrl,
    videoType,
    order
}`;
export default function Watch() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        async function fetchVideos() {
            const data = await client.fetch<Video[]>(VIDEOS_QUERY);
            setVideos(data);
        }

        fetchVideos();
    }, []);

    // Separate primary and secondary videos
    const primaryVideo = videos.find(video => video.videoType === 'primary');
    const secondaryVideos = videos.filter(video => video.videoType === 'secondary');

    return (
        <div className="watch-page">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Watch
            </motion.h1>

            {/* Primary Video */}
            {primaryVideo && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {primaryVideo.title}
                    </motion.h2>
                    <VideoPlayer video={primaryVideo} isPrimary={true} />
                </>
            )}

            {/* Secondary Videos Grid */}
            {secondaryVideos.length > 0 && (
                <div className="watch-iframe__mini-container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        More Videos
                    </motion.h2>
                    <div className="watch-iframe__mini-container__inner">
                        {secondaryVideos.map((video) => (
                            <VideoPlayer key={video._id} video={video} isPrimary={false} />
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}