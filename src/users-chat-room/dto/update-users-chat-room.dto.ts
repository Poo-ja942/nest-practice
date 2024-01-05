import { PartialType } from "@nestjs/mapped-types";
import { CreateUsersChatRoomDto } from "./create-users-chat-room.dto";

export class UpdateUsersChatRoomDto extends PartialType(
  CreateUsersChatRoomDto,
) {}
