import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SampleClient } from 'src/client/sample.client';
import { HttpConfig } from 'src/config/http.config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfig,
    }),
  ],
  providers: [SampleClient],
})
export class ClientsModule {}
