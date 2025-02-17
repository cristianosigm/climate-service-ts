import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('/')
export class RootController {
  constructor(private readonly cfg: ConfigService) {}

  @Get()
  public getHello(): any {
    return { appName: 'Climate Service', appVersion: process.env.VERSION };
  }
}
