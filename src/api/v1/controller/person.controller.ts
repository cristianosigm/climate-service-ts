import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PersonService } from 'src/service/person.service';
import { PersonMapper } from '../mapper/person.mapper';
import { PersonCreateDTO } from '../dto/person.create.dto';
import { PersonUpdateDTO } from '../dto/person.update.dto';

@Controller('/api/v1/persons')
export class PersonController {
  constructor(
    private readonly equipmentService: PersonService,
    private readonly equipmentMapper: PersonMapper,
  ) {}

  @Post()
  public create(@Body() data: PersonCreateDTO) {
    return this.equipmentService.create(this.equipmentMapper.map(data));
  }

  @Get()
  public findAll() {
    return this.equipmentService.findAll();
  }

  @Get('/:id')
  public findById(@Param('id') id: number) {
    return this.equipmentService.findById(id);
  }

  @Put()
  public update(@Body() data: PersonUpdateDTO) {
    return this.equipmentService.update(this.equipmentMapper.mapUpdated(data));
  }

  @Delete('/:id')
  public remove(@Param('id') id: number) {
    this.equipmentService.remove(id);
  }
}
