import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'climate.person' })
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  created: string;

  @Column()
  updated: string;
}
