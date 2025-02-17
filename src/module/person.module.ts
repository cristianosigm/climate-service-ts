import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/api/v1/controller/person.controller';
import { PersonMapper } from 'src/api/v1/mapper/person.mapper';
import { Person } from 'src/model/person.entity';
import { PersonService } from 'src/service/person.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService, PersonMapper],
})
export class PersonModule {}
