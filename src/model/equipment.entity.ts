import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EquipmentType } from './definition/equipment.type.enum';

@Entity({ name: 'climate.equipment' })
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'equipment_type' })
  equipmentType: EquipmentType;

  @Column()
  name: string;

  @Column()
  created: string;

  @Column({ nullable: true })
  updated: string;
}
