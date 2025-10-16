export interface Release {
    _id: string;
    _type: 'release';
    title: string;
    releaseType: 'album' | 'single' | 'ep' | 'mixtape' | 'other';
    releaseDate: string;
    coverImage?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
        alt?: string;
    };
}
