import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ArchivedChatsService } from "./archived-chats.service";
import { CreateArchivedChatDto } from "./dto/create-archived-chat.dto";
import { UpdateArchivedChatDto } from "./dto/update-archived-chat.dto";

@Controller("archived-chats")
export class ArchivedChatsController {
  constructor(private readonly archivedChatsService: ArchivedChatsService) {}

  @Post()
  create(@Body() createArchivedChatDto: CreateArchivedChatDto) {
    return this.archivedChatsService.create(createArchivedChatDto);
  }

  @Get()
  findAll() {
    return this.archivedChatsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.archivedChatsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateArchivedChatDto: UpdateArchivedChatDto,
  ) {
    return this.archivedChatsService.update(+id, updateArchivedChatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.archivedChatsService.remove(+id);
  }
}
