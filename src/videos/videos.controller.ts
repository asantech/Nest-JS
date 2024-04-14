import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateVideoDto, UpdateVideoDto } from './dto/create-videos.dto';
import { VideosService } from './videos.service';
import { CreateVideo } from './interfaces/video.interface';

@Controller('videos')
export class VideosController {
  constructor(private videosSevice: VideosService) {}

  @Post()
  create(@Body()createVideoDto: CreateVideoDto) {
    this.videosSevice.create(createVideoDto)
  }

  @Get()
  async findAll(): Promise<CreateVideo[]> {
    return this.videosSevice.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} video`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() _updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} video`;
  }
}