import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DbConfig implements TypeOrmOptionsFactory {
  constructor(private cfg: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.cfg.get<string>('DB_HOST'),
      port: this.cfg.get<number>('DB_PORT'),
      username: this.cfg.get<string>('DB_USERNAME'),
      password: this.cfg.get<string>('DB_PASSWORD'),
      database: this.cfg.get<string>('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.js,.ts}'],
      synchronize: false,
    };
  }
}
