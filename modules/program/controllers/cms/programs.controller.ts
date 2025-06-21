import { Controller, Get, Post, Put, Delete, Param, Body , UsePipes, ValidationPipe } from '@nestjs/common';
import { ProgramService } from '@modules/program/services/program.service';
import { ProgramPresenter } from '@modules/program/presenters/program.presenter';
import { ResponsePresenter } from '@core/presenters/response.presenter';
import { CreateProgramDto } from '@modules/program/dtos/cms/create-program.dto';
import { UpdateProgramDto } from '@modules/program/dtos/cms/update-program.dto';

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
  async findOne(@Param('id') id: number) {
    const program = await this.programService.findOne(id);
    const transformed = ProgramPresenter.transform(program);
    return ResponsePresenter.success(transformed);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() data: CreateProgramDto) {
    const program = await this.programService.create(data);
    const transformed = ProgramPresenter.transform(program);
    return ResponsePresenter.success(transformed);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateProgramDto
  ) {
    const updated = await this.programService.update(id, dto);
    const transformed = ProgramPresenter.transform(updated);
    return ResponsePresenter.success(transformed);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.programService.remove(id);
    return ResponsePresenter.success();
  }
}
