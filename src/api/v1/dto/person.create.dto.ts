import { IsNotEmpty } from 'class-validator';

export class PersonCreateDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  created: string;

  @IsNotEmpty()
  updated: string;
}
