import { ArchivedChat } from 'src/archived-chats/entities/archived-chat.entity';
import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn()
  room_id: number;

  @ManyToMany(() => User, (user) => user.chat_rooms)
  users: User[];

  @OneToMany(() => Message, (message) => message.chat_room)
  messages: Message[];

  @Column()
  created_at: Date;

  @OneToMany(() => ArchivedChat, (archivedChat) => archivedChat.room)
  archived_chats: ArchivedChat[];
}
