import { Injectable } from '@nestjs/common';
import { CreateArchivedChatDto } from './dto/create-archived-chat.dto';
import { UpdateArchivedChatDto } from './dto/update-archived-chat.dto';

@Injectable()
export class ArchivedChatsService {
  create(createArchivedChatDto: CreateArchivedChatDto) {
    return 'This action adds a new archivedChat';
  }

  findAll() {
    return `This action returns all archivedChats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} archivedChat`;
  }

  update(id: number, updateArchivedChatDto: UpdateArchivedChatDto) {
    return `This action updates a #${id} archivedChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} archivedChat`;
  }
}
