import { Injectable } from '@nestjs/common';
import { EquipmentCreateDTO } from '../dto/equipment.create.dto';
import { Equipment } from 'src/model/equipment.entity';
import { EquipmentType } from 'src/model/definition/equipment.type.enum';
import { EquipmentUpdateDTO } from '../dto/equipment.update.dto';

@Injectable()
export class EquipmentMapper {
  public map(from: EquipmentCreateDTO): Equipment {
    return this.parse(null, from.equipmentType, from.name);
  }

  public mapUpdated(from: EquipmentUpdateDTO): Equipment {
    return this.parse(from.id, from.equipmentType, from.name);
  }

  private parse(id: number, equipmentType: string, name: string): Equipment {
    const result = new Equipment();
    if (id && id > 0) {
      result.id = id;
    }
    result.equipmentType = equipmentType as EquipmentType;
    result.name = name;
    return result;
  }
}
