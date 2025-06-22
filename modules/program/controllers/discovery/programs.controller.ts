import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('programs')
export class ProgramsController {
  @Get()
  findAll() {
    console.log('findAll called');
    return 'findAll endpoint';
  }
}
