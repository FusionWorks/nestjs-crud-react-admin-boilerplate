import { Test, TestingModule } from '@nestjs/testing';
import { GuestsController } from './guests.controller';

describe('Guests Controller', () => {
  let controller: GuestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestsController],
    }).compile();

    controller = module.get<GuestsController>(GuestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
