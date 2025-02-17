import { Module } from '@nestjs/common';
import { RootController } from '../api/root.controller';
import { PersonModule } from './person.module';
import { EquipmentModule } from './equipment.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from 'src/config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfig,
      inject: [DbConfig],
    }),
    PersonModule,
    EquipmentModule,
  ],
  controllers: [RootController],
  providers: [],
})
export class RootModule {}
