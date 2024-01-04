import { Test, TestingModule } from '@nestjs/testing';
import { ArchivedChatsController } from './archived-chats.controller';
import { ArchivedChatsService } from './archived-chats.service';

describe('ArchivedChatsController', () => {
  let controller: ArchivedChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivedChatsController],
      providers: [ArchivedChatsService],
    }).compile();

    controller = module.get<ArchivedChatsController>(ArchivedChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
