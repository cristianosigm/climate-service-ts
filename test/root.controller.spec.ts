import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from '../src/api/root.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let appController: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [AppService],
    }).compile();

    appController = app.get<RootController>(RootController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
