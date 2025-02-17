import { Injectable } from '@nestjs/common';
import { PersonCreateDTO } from '../dto/person.create.dto';
import { Person } from 'src/model/person.entity';
import { PersonUpdateDTO } from '../dto/person.update.dto';

@Injectable()
export class PersonMapper {
  public map(from: PersonCreateDTO): Person {
    return this.parse(
      null,
      from.firstName,
      from.lastName,
      from.created,
      from.updated,
    );
  }

  public mapUpdated(from: PersonUpdateDTO): Person {
    return this.parse(
      from.id,
      from.firstName,
      from.lastName,
      from.created,
      from.updated,
    );
  }

  private parse(
    id: number,
    firstName: string,
    lastName: string,
    created: string,
    updated: string,
  ): Person {
    const result = new Person();
    if (id && id > 0) {
      result.id = id;
    }
    result.firstName = firstName;
    result.lastName = lastName;
    result.created = created;
    result.updated = updated;
    return result;
  }
}
