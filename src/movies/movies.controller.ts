import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all Movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one Movie with the ID : ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Tgis will delete a movie with the ID : ${movieId}`;
  }

  @Put('/:id')
  Put(@Param('id') movieId: string) {
    return `Tgis will put a movie with the ID : ${movieId}`;
  }
}
