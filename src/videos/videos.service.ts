import { Injectable } from "@nestjs/common";
import { CreateVideo, Video } from "./interfaces/video.interface";
 

@Injectable()
export class VideosService {
    private readonly videos: Video[] = []

    create(video: CreateVideo) {
        this.videos.push({id: new Date().getTime(), ...video})
    }

    findAll(): Video[] {
        return this.videos
    }
}