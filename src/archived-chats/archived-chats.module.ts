import { Module } from '@nestjs/common';
import { ArchivedChatsService } from './archived-chats.service';
import { ArchivedChatsController } from './archived-chats.controller';

@Module({
  controllers: [ArchivedChatsController],
  providers: [ArchivedChatsService],
})
export class ArchivedChatsModule {}
