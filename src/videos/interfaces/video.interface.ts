export interface CreateVideo {
    name: string;
    releaseYear: number;
    imdbRate: number;
    length: number;
    description: string;
}

export interface Video extends CreateVideo {
    id: number;
}