import { Test, TestingModule } from "@nestjs/testing";
import { ArchivedChatsService } from "./archived-chats.service";

describe("ArchivedChatsService", () => {
  let service: ArchivedChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchivedChatsService],
    }).compile();

    service = module.get<ArchivedChatsService>(ArchivedChatsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
