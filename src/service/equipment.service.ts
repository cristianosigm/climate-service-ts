import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Equipment } from 'src/model/equipment.entity';
import { ReaderService } from './reader.interface';
import { WriterService } from './writer.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipmentService implements ReaderService, WriterService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  public async create(data: Equipment): Promise<Equipment> {
    return await this.equipmentRepository.save(data);
  }

  public async findAll(): Promise<Array<Equipment>> {
    return await this.equipmentRepository.find();
  }

  public async findById(id: number): Promise<Equipment> {
    return await this.equipmentRepository.findOne({ where: { id } });
  }

  public async update(data: Equipment) {
    data.updated = new Date().toString();
    return await this.equipmentRepository.save(data);
  }

  public remove(id: number) {
    this.equipmentRepository.delete(id);
  }
}
