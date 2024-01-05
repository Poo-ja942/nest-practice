import { Module } from "@nestjs/common";
import { UsersChatRoomService } from "./users-chat-room.service";
import { UsersChatRoomController } from "./users-chat-room.controller";

@Module({
  controllers: [UsersChatRoomController],
  providers: [UsersChatRoomService],
})
export class UsersChatRoomModule {}
