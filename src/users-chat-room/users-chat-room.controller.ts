import { Controller } from "@nestjs/common";
import { UsersChatRoomService } from "./users-chat-room.service";

@Controller("users-chat-room")
export class UsersChatRoomController {
  constructor(private readonly usersChatRoomService: UsersChatRoomService) {}
}
