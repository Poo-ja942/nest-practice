import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersChatRoomService } from "./users-chat-room.service";
import { CreateUsersChatRoomDto } from "./dto/create-users-chat-room.dto";
import { UpdateUsersChatRoomDto } from "./dto/update-users-chat-room.dto";

@Controller("users-chat-room")
export class UsersChatRoomController {
  constructor(private readonly usersChatRoomService: UsersChatRoomService) {}

  @Post()
  create(@Body() createUsersChatRoomDto: CreateUsersChatRoomDto) {
    return this.usersChatRoomService.create(createUsersChatRoomDto);
  }

  @Get()
  findAll() {
    return this.usersChatRoomService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersChatRoomService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUsersChatRoomDto: UpdateUsersChatRoomDto,
  ) {
    return this.usersChatRoomService.update(+id, updateUsersChatRoomDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersChatRoomService.remove(+id);
  }
}
