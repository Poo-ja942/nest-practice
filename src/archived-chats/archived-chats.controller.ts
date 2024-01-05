import { Controller } from "@nestjs/common";
import { ArchivedChatsService } from "./archived-chats.service";

@Controller("archived-chats")
export class ArchivedChatsController {
  constructor(private readonly archivedChatsService: ArchivedChatsService) {}
}
