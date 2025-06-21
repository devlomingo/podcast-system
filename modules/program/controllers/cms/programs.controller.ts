import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProgramService } from '@modules/program/services/program.service';
import { Program } from '@modules/program/entities/program.entity';
import { ProgramPresenter } from '@modules/program/presenters/program.presenter';
import { ResponsePresenter } from '@modules/core/libs/core/presenters/response.presenter';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programService: ProgramService) {}

  @Get()
  async findAll() {
    const programs = await this.programService.findAll();
    const transformed = ProgramPresenter.transformList(programs);
    return ResponsePresenter.success(transformed);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Program> {
    return this.programService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Program>): Promise<Program> {
    return this.programService.create(data);
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
