import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { PersonCreateDTO } from './person.create.dto';

export class PersonUpdateDTO extends PartialType(PersonCreateDTO) {
  @IsNotEmpty()
  id: number;
}
