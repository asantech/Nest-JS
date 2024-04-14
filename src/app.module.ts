import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import { AudiosModule } from './audios/audios.module';

@Module({
  imports: [VideosModule, AudiosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
