import { ArchivedChat } from "src/archived-chats/entities/archived-chat.entity";
import { Message } from "src/messages/entities/message.entity";
import { UserChatRoom } from "src/users-chat-room/entities/users-chat-room.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "email" })
  email: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", select: false })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", select: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "timestamp", select: false })
  deletedAt: Date;

  @OneToMany(() => Message, (message) => message.sender)
  messages_sent: Message[];

  @OneToMany(() => Message, (msg_receiver) => msg_receiver.receiver)
  messages_receive: Message[];

  @OneToMany(() => UserChatRoom, (usersChatRoom) => usersChatRoom.user)
  userChatRooms: UserChatRoom[];

  @OneToMany(() => ArchivedChat, (archivedChat) => archivedChat.archived_by)
  archived_chats: ArchivedChat[];
}
