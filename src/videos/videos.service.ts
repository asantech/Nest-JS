import { Injectable } from "@nestjs/common";
import { Video } from "./interfaces/video.interface";
 

@Injectable()
export class VideosService {
    private readonly videos: Video[] = [{
        name: '',
        releaseYear: 1998,
        imdbRate: 7.8,
        length: 120,
        description: ''
    }]

    create(video: Video) {
        this.videos.push(video)
    }

    findAll(): Video[] {
        return this.videos
    }
}