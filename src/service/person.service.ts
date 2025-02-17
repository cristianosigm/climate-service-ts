import { Injectable } from '@nestjs/common';
import { Person } from 'src/model/person.entity';
import { Repository } from 'typeorm';
import { ReaderService } from './reader.interface';
import { WriterService } from './writer.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService implements ReaderService, WriterService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  public async create(data: Person): Promise<Person> {
    return await this.personRepository.save(data);
  }

  public async findAll(): Promise<Array<Person>> {
    return await this.personRepository.find();
  }

  public async findById(id: number): Promise<Person> {
    return await this.personRepository.findOne({ where: { id } });
  }

  public async update(data: Person) {
    return await this.personRepository.save(data);
  }

  public remove(id: number) {
    this.personRepository.delete(id);
  }
}
