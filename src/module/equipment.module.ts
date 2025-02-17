import { Module } from '@nestjs/common';
import { EquipmentService } from '../service/equipment.service';
import { EquipmentController } from '../api/v1/controller/equipment.controller';
import { EquipmentMapper } from 'src/api/v1/mapper/equipment.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from 'src/model/equipment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment])],
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentMapper],
})
export class EquipmentModule {}
