import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentController } from '../../src/api/v1/controller/equipment.controller';
import { EquipmentService } from '../../src/service/equipment.service';

describe('EquipmentController', () => {
  let controller: EquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentController],
      providers: [EquipmentService],
    }).compile();

    controller = module.get<EquipmentController>(EquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
