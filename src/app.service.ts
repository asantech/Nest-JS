import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIntro(): string {
    return 'This a sample reference "Nest JS" server';
  }
}