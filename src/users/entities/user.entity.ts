import { ArchivedChat } from 'src/archived-chats/entities/archived-chat.entity';
import { ChatRoom } from 'src/chat-rooms/entities/chat-room.entity';
import { Message } from 'src/messages/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  created_at: Date;

  @OneToMany(() => Message, (message) => message.sender)
  messages_sent: Message[];

  @ManyToMany(() => ChatRoom, (chatRoom) => chatRoom.users)
  chat_rooms: ChatRoom[];

  @OneToMany(() => ArchivedChat, (archivedChat) => archivedChat.archived_by)
  archived_chats: ArchivedChat[];
}
