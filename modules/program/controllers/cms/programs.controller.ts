import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProgramService } from '@modules/program/services/program.service';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programService: ProgramService) {}

  @Get()
  findAll() {
    return this.programService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('findOne called');
    return `findOne endpoint with id = ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    console.log('create called');
    return 'create endpoint';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    console.log('update called');
    return `update endpoint with id = ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('remove called');
    return `remove endpoint with id = ${id}`;
  }
}
