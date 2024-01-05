import { ArchivedChat } from 'src/archived-chats/entities/archived-chat.entity';
import { ChatRoom } from 'src/chat-rooms/entities/chat-room.entity';
import { Message } from 'src/messages/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  BeforeUpdate,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'email' })
  email: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', select: false })
  deletedAt: Date;

  @OneToMany(() => Message, (message) => message.sender)
  messages_sent: Message[];

  @ManyToMany(() => ChatRoom, (chatRoom) => chatRoom.users)
  chat_rooms: ChatRoom[];

  @OneToMany(() => ArchivedChat, (archivedChat) => archivedChat.archived_by)
  archived_chats: ArchivedChat[];

  @BeforeUpdate() async beforeUpdateQueryExecution() {
    this.updatedAt = new Date();
  }
}
