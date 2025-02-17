import { IsNotEmpty } from 'class-validator';

export class EquipmentUpdateDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  equipmentType: string;

  @IsNotEmpty()
  name: string;
}
