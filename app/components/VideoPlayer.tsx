import { motion } from 'framer-motion';
import type { Video } from '../types/video';

interface VideoPlayerProps {
    video: Video;
    isPrimary?: boolean;
}

export default function VideoPlayer({ video, isPrimary = false }: VideoPlayerProps) {
    const getEmbedUrl = (url: string) => {
        // Convert YouTube URL to embed format
        if (url.includes('youtube.com/watch')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    const embedUrl = getEmbedUrl(video.videoUrl);
    const autoplayParams = isPrimary ? '?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=1' : '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={isPrimary ? "watch-iframe" : "watch-iframe__mini"}
        >
            <iframe
                width={isPrimary ? "990" : "500"}
                height={isPrimary ? "560" : "300"}
                src={`${embedUrl}${autoplayParams}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
            />
        </motion.div>
    );
}
