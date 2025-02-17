import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EquipmentService } from '../../../service/equipment.service';
import { EquipmentCreateDTO } from '../dto/equipment.create.dto';
import { EquipmentUpdateDTO } from '../dto/equipment.update.dto';
import { EquipmentMapper } from '../mapper/equipment.mapper';

@Controller('/api/v1/equipments')
export class EquipmentController {
  constructor(
    private readonly equipmentService: EquipmentService,
    private readonly equipmentMapper: EquipmentMapper,
  ) {}

  @Post()
  public create(@Body() data: EquipmentCreateDTO) {
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
  public update(@Body() data: EquipmentUpdateDTO) {
    return this.equipmentService.update(this.equipmentMapper.mapUpdated(data));
  }

  @Delete('/:id')
  public remove(@Param('id') id: number) {
    this.equipmentService.remove(id);
  }
}
