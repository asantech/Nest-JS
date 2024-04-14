export class CreateAudioDto {
    name: string;
    releaseYear: number;
    length: number;
}

export class AudioDto extends CreateAudioDto {
    id: number
}

