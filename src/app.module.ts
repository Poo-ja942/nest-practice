import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArchivedChatsModule } from './archived-chats/archived-chats.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, MessagesModule, ChatRoomsModule, ArchivedChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
