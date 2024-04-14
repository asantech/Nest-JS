import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateAudioDto, AudioDto } from './dto/create-audio.dto';
import { AudiosService } from './audios.service';
import { Audio } from './interfaces/audio.interface';

@Controller('audios')
export class AudiosController {
  constructor(private audioSevice: AudiosService) {}

  @Post()
  create(@Body()createAudioDto: CreateAudioDto) {
    this.audioSevice.create(createAudioDto)
  }

  @Get()
  async findAll(): Promise<Audio[]> {
    return this.audioSevice.findAll()
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} audio`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() _updateAudioDto: AudioDto) {
    return `This action updates a #${id} audio`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} audio`;
  }
}