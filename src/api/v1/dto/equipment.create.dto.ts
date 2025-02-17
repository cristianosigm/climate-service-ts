import { IsNotEmpty, IsOptional } from 'class-validator';

export class EquipmentCreateDTO {
  @IsNotEmpty()
  equipmentType: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  created: string;

  @IsOptional()
  updated: string;
}
