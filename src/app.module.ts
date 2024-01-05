import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { ArchivedChatsModule } from "./archived-chats/archived-chats.module";
import { ChatRoomsModule } from "./chat-rooms/chat-rooms.module";
import { MessagesModule } from "./messages/messages.module";
import { dataSourceOptions } from "db/data-source";
import { UsersChatRoomModule } from "./users-chat-room/users-chat-room.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    MessagesModule,
    ChatRoomsModule,
    ArchivedChatsModule,
    UsersChatRoomModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
