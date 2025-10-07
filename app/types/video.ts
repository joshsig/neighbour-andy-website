export interface Video {
    _id: string;
    _type: 'video';
    title: string;
    videoUrl: string;
    videoType: 'primary' | 'secondary';
    order: number;
}
