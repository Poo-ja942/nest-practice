import { ArchivedChat } from "src/archived-chats/entities/archived-chat.entity";
import { Message } from "src/messages/entities/message.entity";
import { UserChatRoom } from "src/users-chat-room/entities/users-chat-room.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Message, (message) => message.chat_room)
  messages: Message[];

  @OneToMany(() => UserChatRoom, (chatRoom) => chatRoom.chat_room)
  user_chat_rooms: UserChatRoom[];

  @OneToMany(() => ArchivedChat, (archivedChat) => archivedChat.room)
  archived_chats: ArchivedChat[];

  @CreateDateColumn({ name: "created_at", type: "timestamp", select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp", select: false })
  deletedAt: Date;
}
