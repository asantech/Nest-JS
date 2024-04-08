export class CreateVideoDto {
    name: string;
    releaseYear: number;
    imdbRate: number;
    length: number;
    description: string;
}

export class UpdateVideoDto extends CreateVideoDto {
    id: string
}

