import { Injectable } from "@nestjs/common";
import { CreateAudioDto, AudioDto } from "./dto/create-audio.dto";
 

@Injectable()
export class AudiosService {
    private readonly audios: AudioDto[] = []

    create(audio: CreateAudioDto) {
        this.audios.push({ id: new Date().getTime() , ...audio})
    }

    findAll(): AudioDto[] {
        return this.audios
    }
}
